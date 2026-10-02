FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY pdl_grab/ ./pdl_grab/

EXPOSE 8765

CMD ["python", "-m", "pdl_grab.cli", "web", "--host", "0.0.0.0", "--no-browser"]
