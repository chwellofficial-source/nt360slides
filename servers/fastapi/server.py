import sys
import os

fastapi_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, fastapi_dir)

import argparse
import uvicorn
from api.main import app

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run the FastAPI server")
    parser.add_argument(
        "--port", type=int, required=True, help="Port number to run the server on"
    )
    parser.add_argument(
        "--reload", type=str, default="false", help="Reload the server on code changes"
    )
    args = parser.parse_args()
    reload = args.reload == "true"
    host = "127.0.0.1"
    os.environ.setdefault("FASTAPI_PUBLIC_URL", f"http://{host}:{args.port}")
    uvicorn.run(
        app,
        host=host,
        port=args.port,
        log_level="info",
    )
