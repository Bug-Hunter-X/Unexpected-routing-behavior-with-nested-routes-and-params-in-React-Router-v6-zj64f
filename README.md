# React Router v6 Nested Route and Params Issue

This repository demonstrates a problem encountered when using nested routes and parameters in React Router v6.  Navigating to a nested route after visiting a route with a parameter sometimes leads to unexpected routing behavior, such as the wrong component rendering, or the parameter not being passed correctly.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/about`.
5. Then navigate to `/users/123`.
6. Observe the unexpected behavior.

## Solution

The solution involves using the `useSearchParams` hook to correctly manage parameters when navigating between nested routes.