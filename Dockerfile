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


# Define the command to start your application

CMD ["yarn", "start"]
