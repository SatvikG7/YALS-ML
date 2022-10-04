<hr/>
<p align="center"> ⚠️ yals.ml domain has deprecated ⚠️ </p>
<p align="center"> ⚠️ Please replace yals.ml with yals-ml.vercel.app in previously created links ⚠️ </p>
<p align="center"> ⚠️ Use turl.vercel.app for creating new links ⚠️ </p>
<hr/>

<p align="center">
  <h3 align="center">YALS-ML</h3>
  <p align="center">
    Yet Another Link Shortener - Minify Link
    <br/>
    <br/>
    <a href="https://yals-ml.vercel.app">Visit</a>
    .
    <a href="https://github.com/SatvikG7/YALS-ML/issues">Report Bug</a>
    .
    <a href="https://github.com/SatvikG7/YALS-ML/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/deployments/SatvikG7/YALS-ML/production?label=vercel&logo=vercel&logoColor=white) ![Contributors](https://img.shields.io/github/contributors/SatvikG7/YALS-ML?color=dark-green) ![Issues](https://img.shields.io/github/issues/SatvikG7/YALS-ML) ![License](https://img.shields.io/github/license/SatvikG7/YALS-ML)

<hr/>

## Table Of Contents

<hr/>

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
	- [Requirements](#requirements)
	- [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
	- [Creating A Pull Request](#creating-a-pull-request)
- [License](#license)
- [Authors](#authors)
<!-- -   [Usage](#usage) -->
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Authors](#authors)

## About The Project

![Screenshot](https://raw.githubusercontent.com/SatvikG7/YALS-ML/master/public/screenshot.jpeg)

There are tons of link shorteners present on internet today, however, they do not let you create custom link or they limit them till some extent, but yals will soon let you create custom branded links for free, until my FaunaDB doesn't run out of space :smile:

Here's why you should you yals-ml:

-   Most clear interface ever.
-   No ads till now.
-   99.99% uptime.

## Built With

-   Nextjs
-   Tailwaind CSS
-   FaunaDB

## Deploy on

- [Vercel](https://vercel.com)
## Getting Started

Here is how you can get started with the project locally

### Requirements

-   node
-   npm or yarn
### Installation

1. Clone the repo

    ```
    git clone https://github.com/SatvikG7/YALS-ML
    ```

2. Install NPM packages

    ```
    npm install
    # or
    yarn install
    ```

3. Create `.env.local` in root directory of project

4. Setup FaunaDb

    - Upload schema.gql to fauna db.
    - Run following commands in fauna shell
        ```fql
        CreateCollection({ name: "accounts" })
        CreateCollection({ name: "sessions" })
        CreateCollection({ name: "users" })
        CreateCollection({ name: "verification_tokens" })
        CreateIndex({
          name: "account_by_provider_and_provider_account_id",
          source: Collection("accounts"),
          unique: true,
          terms: [
            { field: ["data", "provider"] },
            { field: ["data", "providerAccountId"] },
          ],
        })
        CreateIndex({
          name: "session_by_session_token",
          source: Collection("sessions"),
          unique: true,
          terms: [{ field: ["data", "sessionToken"] }],
        })
        CreateIndex({
          name: "user_by_email",
          source: Collection("users"),
          unique: true,
          terms: [{ field: ["data", "email"] }],
        })
        CreateIndex({
          name: "verification_token_by_identifier_and_token",
          source: Collection("verification_tokens"),
          unique: true,
          terms: [{ field: ["data", "identifier"] }, { field: ["data", "token"] }],
        })
		CreateIndex({
          name: "LURL_Check",
          source: Collection("Url"),
          unique: false,
          terms: [{ field: ["data", "LURL"] }],
          values: [{ field: ["data", "SURL"] }],
        })
		CreateIndex({
          name: "LURL_Return",
          source: Collection("Url"),
          unique: false,
          terms: [{ field: ["data", "SURL"] }],
          values: [{ field: ["data", "LURL"] }],
        })
        ```

5. Enter your API keys in `.env.local`

```
NODE_ENV=development
BASE_URL=http://localhost:3000

FAUNADB_SECRET=<FAUNADB_SECRET>

GITHUB_CLIENT_ID=<GITHUB_CLIENT_ID>
GITHUB_CLIENT_SECRET=<GITHUB_CLIENT_SECRET>

NEXTAUTH_URL=http://localhost:3000
SECRET=<SECRET_FOR_NEXT_AUTH>
JWT_SECRET=<SECRET_FOR_JWT>

VERCEL_API_URL=https://api.vercel.com/v6/deployments?teamId=<YOUR_TEAM_ID_OR_USERNAME>
VERCEL_API_TOKEN=<VERCEL_API_TOKEN>
```

6. Start dev server

```
npm run dev
# or
yarn dev
```

## Roadmap

See the [open issues](https://github.com/SatvikG7/YALS-ML/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

-   If you have suggestions for adding or removing features, feel free to [open an issue](https://github.com/SatvikG7/YALS-ML/issues/new) to discuss it, or directly create a pull request with necessary changes.
-   Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/SatvikG7/YALS-ML/blob/main/LICENSE) for more information.

## Authors

-   **Satvik Gaikwad** - [Satvik Gaikwad](https://github.com/SatvikG7/)
