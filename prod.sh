
#!/bin/bash

# Start the build process
echo "Starting build process..."

# Run the build command and check if it was successful
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed! Exiting."
  exit 1
fi

# Copying the required files to the standalone directory
echo "Copying public files to standalone directory..."
cp -r public .next/standalone/

# Check if the copy was successful
if [ $? -ne 0 ]; then
  echo "Failed to copy public files. Exiting."
  exit 1
fi

# Copy static files to the standalone directory
echo "Copying static files to standalone directory..."
cp -r .next/static .next/standalone/.next/

# Check if the copy was successful
if [ $? -ne 0 ]; then
  echo "Failed to copy static files. Exiting."
  exit 1
fi

# Optionally run a docker-compose command if needed
# Uncomment the line below to bring up the Docker containers
# echo "Running docker-compose up..."
# docker-compose up -d

echo "Process completed successfully!"

