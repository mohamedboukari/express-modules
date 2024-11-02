# Express modules

A modern Node.js application built with Express.js, featuring ES Modules, MongoDB integration, Socket.IO for real-time communication, and Twig templating engine.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Make sure it's installed and running)
- npm or yarn package manager

## Important Note About ES Modules

This project uses ECMAScript Modules (ES Modules) instead of CommonJS. This is configured in `package.json` with `"type": "module"`.

### ES Modules Syntax

```javascript
// Importing
import express from 'express';
import { Router } from 'express';
import mongoose from 'mongoose';

// Exporting
export default router;
export { someFunction, someVariable };
```

### File Extensions

When using ES Modules, you must:
- Use the `.js` extension when importing local files
- Use full file extensions in imports (`.js`, `.json`, etc.)

```javascript
// Correct
import { userRouter } from './routes/user.js';

// Wrong (will not work)
import { userRouter } from './routes/user';
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mohamedboukari/express-modules.git
cd express-modules
```

2. Install dependencies:
```bash
npm install
```

## Features

- ES Modules support (`"type": "module"`)
- Express.js web framework
- MongoDB integration using Mongoose
- Real-time communication with Socket.IO
- Twig templating engine
- Input validation using Yup
- ESLint and Prettier for code formatting
- Hot reloading with Nodemon

## Project Structure

```
express-modules/
├── app.js              # Application entry point
├── package.json        # Project dependencies and scripts
├── .eslintrc          # ESLint configuration
├── .prettierrc        # Prettier configuration
└── README.md          # Project documentation
```

## Example Usage

```javascript
// app.js
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
```

## Available Scripts

- `npm start`: Start the development server with Nodemon
- `npm run lint`: Run ESLint to check code quality
- `npm run lint:fix`: Fix ESLint issues automatically
- `npm run format`: Format code using Prettier
- `npm test`: Run tests (not configured yet)

## Dependencies

### Main Dependencies
- `express` (^4.21.0): Web framework for Node.js
- `mongoose` (^8.7.0): MongoDB object modeling tool
- `socket.io` (^4.8.0): Real-time communication library
- `body-parser` (^1.20.3): Request body parsing middleware
- `twig` (^1.17.1): Template engine
- `yup` (^1.4.0): Schema validation
- `http-errors` (^2.0.0): Create HTTP errors
- `nodemon` (^3.1.7): Development server with hot reload

### Dev Dependencies
- `eslint` (^8.57.0): JavaScript linter
- `eslint-config-prettier` (^9.1.0): ESLint configuration for Prettier
- `eslint-plugin-import` (^2.30.0): ESLint import/export rules
- `eslint-plugin-node` (^11.1.0): ESLint Node.js-specific rules
- `eslint-plugin-prettier` (^5.2.1): Run Prettier as an ESLint rule

## Common ES Modules Gotchas

1. **__dirname and __filename**: These are not available by default in ES Modules. Use this workaround:
```javascript
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

2. **require()**: Not available in ES Modules. Use `import` instead.

3. **JSON imports**: Must include the `.json` extension:
```javascript
import config from './config.json' assert { type: 'json' };
```

## Author

Mohamed Boukari

## License

ISC

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email [mouhamedboukari20@gmail.com] or open an issue in the repository.