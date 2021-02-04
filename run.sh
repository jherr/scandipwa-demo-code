docker run -p 3000:3000 \
  -i \
  --mount type=bind,source="$(pwd)"/.,target=/usr/src/app/extension \
  -t growlers
