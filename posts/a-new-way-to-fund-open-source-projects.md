url: https://medium.com/open-collective/a-new-way-to-fund-open-source-projects-91a51b1b7aac
date: Sun Feb 21 2016 21:02:41 GMT+0100 (CET)


# A New Way to Fund Open Source Projects

Goodwill only takes you so far. Here is a new way to fund open source projects that aligns the interests of companies with open source communities.

There have been more and more talks recently about the [lack of funding for open source projects](https://medium.com/@nayafia/how-i-stumbled-upon-the-internet-s-biggest-blind-spot-b9aa23618c58#.3b54k46ze). [Nadia Eghbal](undefined) even started [a list of Open Source Projects who need support](http://fundingoss.com). Yet, there is no good solution today to fund them.

When I built the first version of Storify back in 2010, [I used NodeJS](https://twitter.com/xdamman/status/25699453621) which was at its [very infancy](https://twitter.com/xdamman/status/11655621996716032). We were one of the first large scale consumer website built entirely in javascript. Node was at version 0.1, and NPM was just getting started. Fun times.

Once we got funding, I wanted to financially give back to the community. We couldn’t pay someone’s salary, but we could have easily given a few hundred dollars per year. Multiply that by the number of startups who have funding and who are using the same open source projects, that could have totally paid for at least one part time if not a full time salary.

But there was no easy way to do it. There is no “Back This Project” button on the github page of those open source projects.

### Why there is no “Back This Project” button on Github?

It’s not that easy. An Open Source Project is a community. It doesn’t have a legal entity. It doesn’t have a bank account. They can’t collect money under their name.

Some repositories ask for donations that go directly to the personal paypal account of the primary owner of the project. But then the money ends up in a blackbox and the community doesn’t have any visibility on the funds raised under their name. It doesn’t feel right. We could count on the primary owner to be transparent and report all transactions to the community, but it’s a pain to manage. So much so that most chose to simply not accept money for the project. People would rather focus on their craft, their code.

### Why current solutions don’t work?

A few solutions have emerged over the last few years, such as Gittip (now Gratipay), BountyCode, and others. They work around the issue by targeting individual contributors. [isaacs](undefined) has a very good critic of them in his blog post “[Money and Open Source](https://medium.com/open-source-life/money-and-open-source-d44a1953749c#.gcuta73xm)”.

The problem is that incentives are not aligned. While it makes sense for contributors to get people to pay them a weekly salary, there is no real benefit for the donor. As a result, none of them have really taken off.

We should take a step back and start with what people are willing to pay for.

As a company I don’t want to attach my name to a person, I want to attach my name to a project or a community. And I want to get something out of it. I need to justify my investment: “what’s in there for me?”. Goodwill only gets you so far.

I don’t need the software since by definition I already have access to it (it’s open source). I’d love more support but I understand that no one wants to guarantee that. People who contribute to open source project don’t want it to be a job. They want to pick the issues that they want and they don’t want to be told what to do. But there is something else that is valuable to a company that doesn’t require anyone in the community to do any work: visibility.

I would have paid to have our Storify logo on the README.md file of node modules that we were using. Not only it would show our support (good karma), but it would also help us get in front of developers who are using the same technologies that we are using. Those are the people we actually want to hire!

For developers, it is also useful to see which companies are using this code and — if you are looking — where you could apply for a job. Everyone wins. No strings attached. This wouldn’t give me any privilege over anyone else posting feature requests or issues. Just visiblity.

But to whom should I give money for the project to have my logo on their github page and/or website? It doesn’t have a bank account.

### One open source project, one collective

We can’t expect open source projects to start creating legal entities. Way too much overhead. And only a limited number of people would have visibility on the account of the entity. Not the right tool for the job.

We need a new form of association to enable those open source communities to collect money. It should be as easy to create as creating a Github repository, it should be transparent (everyone should be able to see the full ledger), and it should be linked to the project, not to the individuals behind that could change over time.

We call those new entities “open collectives”. They are not real legal entities per se; they are “virtual entities” that are created on top of an existing legal entity. It’s using the concept of Fiscal Sponsorship (or umbrella organizations). See [A New Form of Association for the Internet Generation](https://medium.com/open-collective/a-new-form-of-association-for-the-internet-generation-part-2-fe6d8415f444#.wa080i246).

### Private beta

We started our private beta in February. We already have a couple of super interesting and popular open source projects such as [Yeoman](https://opencollective.com/yeoman), [MochaJS](https://opencollective.com/mochajs), [Apex](https://opencollective.com/apex) and [a few others](https://opencollective.com/opensource).

We are basically hosting them on our own bank account and legal entity for now, and whenever we can, we are moving them to dedicated organizations such as [Ruby Together](http://rubytogether.org) (if you have such umbrella organization, [please reach out](mailto:info@opencollective.com) as we would love to send projects your way!).

Our platform streamlines the process of Fiscal Sponsorship. We generate a dedicated page for each collective from which they can collect money from backers and sponsors. We keep track of each budget independently and we provide an interface to the host organization (the fiscal sponsor) to easily approve their expenses and make sure they never get over their limit.

MochaJS already secured a sponsorship from [SauceLabs](https://saucelabs.com/javascript/mocha-js?utm_campaign=brand&utm_medium=display&utm_source=mochajs) and [AuthO](https://auth0.com/?utm_source=opencollective&utm_medium=sp&utm_campaign=mochajs) for $500/month each. They each have their logo automatically showing up on [Mocha’s website](http://mochajs.org/) (40k unique visitors/month) and [on their Github page](https://github.com/mochajs/mocha) (9k stars and 7.5k unique visitors per month) with a link back to the sponsor’s website. That’s already a $10k+ yearly budget (compared to nothing just a few weeks ago). [PubNub](https://www.pubnub.com) is [sponsoring Apex](https://github.com/apex/apex#sponsors) for $100/month. Yeoman has already [11 backers](https://github.com/yeoman/yo#backers), [DigitalOcean](https://www.digitalocean.com/?utm_source=github&utm_medium=oss_sponsorships&utm_campaign=opencollective) is sponsoring Readline for $50/month, [React-Static-Boilerplate](https://github.com/koistya/react-static-boilerplate#sponsors) and [Babel-Starter-Kit](https://github.com/kriasoft/babel-starter-kit) for $100/month each… And it’s just the beginning.

![The open collective page of MochaJS (https://opencollective.com/mochajs)](https://cdn-images-1.medium.com/max/2000/1*mjynsTgkZTKexr4EV0B6oA.png)*The open collective page of MochaJS (https://opencollective.com/mochajs)*

We are looking forward to working with more companies who want to show their support to the open source community without which they wouldn’t be able to build all the awesome products that they are building. If that sounds like your company, [shoot us an email](mailto:info@opencollective.com)!

<iframe src="https://medium.com/media/a8d9c0d1ef8696b12a6563aa5768f117" frameborder=0></iframe>

And we are also looking forward to working with more open source communities to help them get funding. If you are part of such community, start a conversation with a github issue [like this one](https://github.com/koajs/koa/issues/729) and [ping us on Twitter](https://twitter.com/intent/tweet?status=%40opencollect%20can%20you%20create%20an%20open%20collective%20for%20our%20community?%20See%20https://github.com/...) or [Slack](https://slack.opencollective.com) and we will get in touch.

![Integration of Open Collective in the README.md of the MochaJS repository (https://github.com/mochajs/mocha). It automatically acknowledges the backers and sponsors of the project.](https://cdn-images-1.medium.com/max/6030/1*viAA-MFWGn75RXacAGdayQ.png)*Integration of Open Collective in the README.md of the MochaJS repository (https://github.com/mochajs/mocha). It automatically acknowledges the backers and sponsors of the project.*

![README.md of Yeoman (https://github.com/yeoman/yo). Backers show up automatically with a link to their website.](https://cdn-images-1.medium.com/max/3984/1*f14vVcMHQpMF7rbTc7lydw.png)*README.md of Yeoman (https://github.com/yeoman/yo). Backers show up automatically with a link to their website.*

### The future

It’s an ongoing experiment. And we are looking forward to working with more open source projects and host organizations to figure this out together.

We believe in a future where open source projects could be well funded. All our companies use open source projects. We need people to maintain them. It’s work. We will all benefit from a thriving open source community.

We dream of a future where people can choose what they want to work on. Which open source projects they would love to contribute to, or start. And be paid for it.

Let’s make this happen, together.

**About the author:**
Xavier Damman is a contributor to the [Open Collective project](https://github.com/opencollective/opencollective). He was before the cofounder of Storify.com, a tool to publish social media. Find him on Twitter: [@xdamman](https://twitter.com/xdamman)
