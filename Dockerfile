# Use the official Node.js LTS image as base

FROM node:18.17.0

# Set Yarn to use Berry version

RUN yarn set version berry

# Set the working directory inside the container

WORKDIR /app

# Copy package.json and yarn.lock to the working directory

COPY . .

RUN export NEXTAUTH_SECRET="fFXJvULLSfyf2AKwVtJr6v23t7iozumhziZbqiuUueg="
# Install project dependencies

RUN yarn install

RUN yarn build
# Copy the rest of the application code to the working directory

#COPY . .


# Expose the port your Next.js application will run on (usually 3000)

EXPOSE 3000

# Add Mongo service
RUN apt-get update && apt-get install -y --no-install-recommends mongodb

# Create Mongo data directory (optional)
RUN mkdir -p /data/db
# Mount volume for Mongo data
VOLUME /data/db

# Start Mongo service (uncomment if desired)
CMD ["mongod", "--quiet", "--pidfilepath=/var/run/mongodb.pid", "--dbpath=/data/db"]



# Define the command to start your application

CMD ["yarn", "start"]
