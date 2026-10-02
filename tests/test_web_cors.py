import http.client
import json
import pathlib
import sys
import threading
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))

from pdl_grab.web import Handler
from http.server import ThreadingHTTPServer


class WebCorsTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.port = cls.server.server_address[1]

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=2)

    def request(self, method, path, origin, body=None):
        connection = http.client.HTTPConnection("127.0.0.1", self.port, timeout=5)
        connection.putrequest(method, path, skip_host=True)
        connection.putheader("Host", f"192.168.5.12:{self.port}")
        connection.putheader("Origin", origin)
        if method == "OPTIONS":
            connection.putheader("Access-Control-Request-Method", "POST")
            connection.putheader("Access-Control-Request-Headers", "content-type")
        if body is not None:
            payload = json.dumps(body).encode()
            connection.putheader("Content-Type", "application/json")
            connection.putheader("Content-Length", str(len(payload)))
        connection.endheaders(payload if body is not None else None)
        response = connection.getresponse()
        result = response.status, dict(response.getheaders()), response.read()
        connection.close()
        return result

    def test_lan_origin_preflight_is_supported(self):
        status, headers, _ = self.request(
            "OPTIONS", "/api/catalog", "http://192.168.5.12:%d" % self.port
        )
        self.assertEqual(status, 204)
        self.assertEqual(headers["Access-Control-Allow-Origin"], "http://192.168.5.12:%d" % self.port)

    def test_lan_origin_post_is_allowed(self):
        status, headers, _ = self.request(
            "POST", "/api/auto_coord", "http://192.168.5.12:%d" % self.port, {}
        )
        self.assertEqual(status, 200)
        self.assertEqual(headers["Access-Control-Allow-Origin"], "http://192.168.5.12:%d" % self.port)

    def test_foreign_origin_is_rejected(self):
        status, _, body = self.request("OPTIONS", "/api/catalog", "http://evil.example")
        self.assertEqual(status, 403)
        self.assertIn("拒绝非同源请求", body.decode())


if __name__ == "__main__":
    unittest.main()
