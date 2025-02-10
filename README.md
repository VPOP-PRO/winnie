# Winnie

Thanks for applying to work at VPOP® PRO. It means a lot to me to have you consider joining our team.

Winnie is a fictitious web app that let’s users search for book covers. It is powered by the OpenLibrary API. It’s a `React` app alongside an `Express` server.

To complete this coding challenge, simply read through this document and follow any instructions.

You must either **clone this repository** or **download it as a ZIP file** and make your changes locally.

When you’re done, please ZIP up the project and email it to `info@vpop-pro.com` as an attachment with the subject being `Junior Developer Submission: <First Name> <Last Name>`.

> ❗ Make sure you’ve deleted the `node_modules` folder and the `winnie.db` file before you ZIP otherwise it’ll be too heavy to deliver as an email attachment.

## Rules

This coding challenge is designed to explore how you solve problems.

1. **Write your own code** <br/> Don’t copy work from the internet or straight from AI-generated sources. I’m able to spot code that’s not your work instantly.

2. **Research** <br/> At the same time, I strongly encourage you to research and reference sources like `StackOverflow` or documentation.

3. **Have fun** <br/> This challenge is designed to explore how you think. This isn’t an exam. You’re welcome to make mistakes, skip tasks you can’t do and ask questions.

## 🚀 Getting Started

The API is in the `api` directory and the frontend app is in the `www` directory.

### Installation

Install the dependencies with `pnpm`.

```zsh
pnpm i
# in the `api` directory, you will need to approve `sqlite3` with the command below
pnpm approve-builds
```

> _🤔 What’s `pnpm`?_ <br/> It’s a fast, disk space efficient package manager that’s up to 2x faster than `npm`. Files inside `node_modules` are cloned or hard linked from a single content-addressable storage.

Alternatively, you can also install the dependencies with `npm`.

```zsh
npm i
```

### Testing

Run the `test` script. Note that this is only present in the `api`.

```zsh
pnpm run test
# or with `npm`
npm run test
```

## 🏆 Challenges

Now the fun stuff you’ve been waiting for.

### 1. Responsive Design

The marketing team asked me to provide them with statistics about our users such as their locations and what devices they use. After looking at the `Cloudfront` dashboard, we found out that 70% of our users are accessing Winnie on mobile devices.

Unfortunately, Winnie wasn’t designed with a mobile-first approach and we’ve had user feedback at conferences mentioning inconsistent spacing in the header on mobile devices and a broken footer.

Luckily, we’re using `TailwindCSS`.

> _🤔 What’s `TailwindCSS`?_ <br/> A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

#### ❗ Can you correct the obvious design flaws relating to responsive design?

You’re probably aware that responsive design is critical for websites and web apps so aim for a solution that allows seamless viewing across various devices.

Enter your summary below.

```
When you’ve done this task, edit this markdown file and give me a summary of your changes, challenges experienced and any other findings here.
```

### 2. Search Performance ⚡

The majority of our users are on mobile devices. They’re likely using mobile data and on relatively slower connections compared to desktop users.

I just realized that the search functionality runs the search function on every keystroke. This means we’re executing an excessive amount of network requests. It also causes glitches where the cover is overwritten by a previous network request due to delays on slower connections.

#### ❗ Can you optimize search?

We don’t want to execute searching on every keystroke. Maybe you can incorporate something that ensures it only runs when the user stops typing? Anything reasonable to reduce network requests would be a great improvement.

Enter your summary below.

```
When you’ve done this task, edit this markdown file and give me a summary of your changes, challenges experienced and any other findings here.
```

### 3. Forms

A form needs to be been setup to request new books to be added to the OpenLibrary catalog. Unfortunately, the form and the API endpoint was never finished. It needs to send the book title and author name to the API and save it into the database. If a book with the same title and author already exists, it **shouldn’t** insert it.

#### ❗ Can you create the form? This includes the endpoint to receive the `POST` request under the path `/api/request`? Can you also write the `/api/requests` endpoint?

Enter your summary below.

```
When you’ve done this task, edit this markdown file and give me a summary of your changes, challenges experienced and any other findings here.
```

### 4. Roast

Here’s an opportunity for you to roast Winnie. You might have spotted some red flags in our current processes.

#### ❗ Can you roast Winnie?

Enter your roast below.

```
Tell me what we’re doing wrong. Think along the lines of formatting, our deployment processes or even SEO. Be brutal.
```

## 📧 Submission

Before you submit, feel free to add any other changes or improvements.

Please ZIP up the project and email it to `info@vpop-pro.com` as an attachment with the subject being `Junior Developer Submission: <First Name> <Last Name>`.

> ❗ Make sure you’ve deleted the `node_modules` folder and the `winnie.db` file before you ZIP otherwise it’ll be too heavy to deliver as an email attachment.
