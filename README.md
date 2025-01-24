# Astro + Preact Counter with State Management

This is an example project using Astro and Preact to demonstrate state management with `useContext` and `useReducer`. The application includes a simple counter with a modular structure for actions and reducers.

## Project Structure

```
src/
  actions/
    counterActions.js          # Action types for the counter
  reducers/
    counterReducer.js          # Reducer logic for the counter
  components/
    Counter.jsx                # Counter buttons to increment, decrement, and reset
    CounterDisplay.jsx         # Displays the current count
    ReactIsland.jsx            # Wrapper for CounterProvider and interactive components
  contexts/
    CounterContext.jsx         # Context and provider for state management
  pages/
    index.astro                # Main page wrapping the ReactIsland component
```

## Features

- **Astro Integration**: Uses Astro's partial hydration feature to render Preact components.
- **State Management**: Implements `useContext` and `useReducer` for clean and reusable state management.
- **Modular Design**: Separates actions and reducers into dedicated folders for scalability.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

The app provides a simple counter with three buttons:

- `+`: Increment the counter.
- `-`: Decrement the counter.
- `Reset`: Reset the counter to `0`.

The state is managed using `useReducer` and shared via `useContext` within the `CounterProvider`.

## Folder Highlights

### `actions/`
Defines reusable action types (e.g., `INCREMENT`, `DECREMENT`, `RESET`).

### `reducers/`
Contains the logic to handle state transitions based on dispatched actions.

### `contexts/`
Defines the `CounterContext` and `CounterProvider` to encapsulate and share state across components.

## Contributing

Feel free to submit issues or contribute to the project with pull requests.