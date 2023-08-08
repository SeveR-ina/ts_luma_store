FROM cypress/included:12.17.3
# Create the folder where project will exist
RUN mkdir /ts_luma_store
# Set the working directory
WORKDIR /ts_luma_store
# Copy the package.json file
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.ts .
COPY ./cypress.env.json .
COPY ./cypress ./cypress
# Copy the rest of the files
COPY . /ts_luma_store
# Install the dependencies
RUN npm install
# Run the tests
ENTRYPOINT  ["npm","run"]
CMD ["dev:test"]