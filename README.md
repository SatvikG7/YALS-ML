<p align="center">
  <h3 align="center">YALS</h3>
  <p align="center">
    Yet Another Link Shortener
    <br/>
    <br/>
    <a href="https://yals.ml">Visit</a>
    .
    <a href="https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/issues">Report Bug</a>
    .
    <a href="https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/deployments/SatvikG7/YALS-YetAnotherLinkShortener/production?label=vercel&logo=vercel&logoColor=white) ![Contributors](https://img.shields.io/github/contributors/SatvikG7/YALS-YetAnotherLinkShortener?color=dark-green) ![Issues](https://img.shields.io/github/issues/SatvikG7/YALS-YetAnotherLinkShortener) ![License](https://img.shields.io/github/license/SatvikG7/YALS-YetAnotherLinkShortener)

## Table Of Contents

-   [About the Project](#about-the-project)
-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
<!-- -   [Usage](#usage) -->
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Authors](#authors)

## About The Project

![Screenshot](https://raw.githubusercontent.com/SatvikG7/YALS-YetAnotherLinkShortener/master/public/screenshot.jpeg)

There are tons of link shorteners present on internet today, however, they do not let you create custom link or they limit them till some extent, but yals will soon let you create custom branded links for free, until my FaunaDB doesn't run out of space :smile:

Here's why you should you yals:
-   Most clear interface ever.
-   No ads till now.
-   100% uptime. verify @ http://status.yals.ml/
-   Yals.ml sounds like (and is) a legitimate domain, by which the recipients are more likely to click on the link


A list of commonly used resources that I find helpful are listed in the acknowledgements.

## Built With

- Nextjs
- Tailwaind CSS
- FaunaDB

## Getting Started

Here is how you can get started with the project locally

### Prerequisites

-   npm

```
npm install npm@latest -g
```

### Installation

1. Clone the repo
```
git clone https://github.com/SatvikG7/YALS-YetAnotherLinkShortener
```

2. Install NPM packages
```
npm install
# or
yarn install
```

3. Create `.env.local` in root directory of project

4. Enter your API keys in `.env.local`
```
DOMAIN=localhost:3000
FAUNADB_SECRET=<your_key>
NODE_ENV=development
```
If you are using Authentication using Github(optional)
```
DOMAIN=localhost:3000
FAUNADB_SECRET=<your_key>
NODE_ENV=development
GITHUB_ID=<your_client_id>
GITHUB_SECRET=<your_secret>
SECRET=<this_is_my_secret_for_auth>
```

5. Start dev server
```
npm run dev
# or
yarn dev
```

## Roadmap

See the [open issues](https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

-   If you have suggestions for adding or removing features, feel free to [open an issue](https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/issues/new) to discuss it, or directly create a pull request with necessary changes.
-   Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/blob/main/LICENSE) for more information.

## Authors

-   **Satvik Gaikwad** - [Satvik Gaikwad](https://github.com/SatvikG7/)
