# Movie Vault 🎬

## Description

Movie Vault is a web platform that allows you to explore the latest movies, discover cast details, ratings, and more. We integrate a dedicated API to bring you real-time updates directly from trusted sources.

## Technologies Used

*   [<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>](https://nextjs.org/) A React framework for building server-rendered and statically generated web applications.
*   [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>](https://react.dev/) A JavaScript library for building user interfaces.
*   [<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>](https://redux.js.org/) A predictable state container for JavaScript apps.
*   [<img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"/>](https://redux-toolkit.js.org/) The official, opinionated, batteries-included toolset for efficient Redux development.
*   [<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>](https://axios-http.com/) A promise-based HTTP client for making API requests.
*   [<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>](https://tailwindcss.com/) A utility-first CSS framework for rapidly designing custom designs.
*   [<img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>](https://www.framer.com/motion/) A production-ready motion library for React.
*   Material Tailwind A UI library built on top of Tailwind CSS.
*   Font Awesome A toolkit for customizable icons.
*   Swiper A modern touch slider.
*   React Spinners A collection of loading spinners for React.

## Dependencies

*   **next**: "^15.2.1"
*   **react**: "^19.0.0"
*   **react-dom**: "^19.0.0"
*   **react-redux**: "^9.2.0"
*   **redux-thunk**: "^3.1.0"
*   **@reduxjs/toolkit**: "^2.6.0"
*   **axios**: "^1.8.1"
*   **framer-motion**: "^12.4.9"
*   **tailwindcss**: "^4.0.9"
*   **@tailwindcss/vite**: "^4.0.9"
*   **@material-tailwind/react**: "^2.1.10"
*   **@fortawesome/fontawesome-svg-core**: "^6.7.2"
*   **@fortawesome/free-solid-svg-icons**: "^6.7.2"
*   **@fortawesome/react-fontawesome**: "^0.2.2"
*   **swiper**: "^11.2.5"
*   **react-spinners**: "^0.15.0"

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Amrr-Maherr/MovieVault.git
    cd MovieVault
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Build the project:

    ```bash
    npm run build
    ```

3.  Start the production server:

    ```bash
    npm run start
    ```

## API

The project uses the [FreeTestAPI](https://freetestapi.com/) to fetch movie data. The following endpoints are used:

*   **Base Endpoint:** Access the complete dataset of movies. Supports query parameters for filtering, pagination, and sorting.

    ```
    GET https://freetestapi.com/api/v1/movies
    ```

*   **Single Record:** Retrieve detailed information for a specific movie object by its unique ID. Useful for testing item-level displays.

    ```
    GET https://freetestapi.com/api/v1/movies/1
    ```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## License

This project is licensed under the MIT License.