FROM node:20

COPY package*.json ./

RUN npm install

# Install Playwright dependencies
RUN npx playwright install --with-deps

# Copy the rest of the application files
COPY . .

# Command to run tests
CMD ["npx", "cucumber-js"]

# docker run --rm cucumber-playwright-fw npx cross-env ENV=uat cucumber-js --tags "@login"