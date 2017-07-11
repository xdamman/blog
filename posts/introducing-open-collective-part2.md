url: https://medium.com/open-collective/a-new-form-of-association-for-the-internet-generation-part-2-fe6d8415f444
date: Wed Dec 30 2015 18:47:23 GMT+0100 (CET)


# A New Form of Association for the Internet Generation — part 2

## How can we do things together that require money without having to worry about the complexity of creating and maintaining legal entities?

## A New Form of Association for the Internet Generation — part 2

### How can we do things together that require money without having to worry about the complexity of creating and maintaining legal entities?

[In part 1](https://medium.com/@xdamman/a-new-form-of-association-for-the-internet-generation-part-1-6d6c4f5dd27f#.d0v7efqge), I covered a few situations where we need to collect money to do things together. In each of those cases, the last thing we want to do is to deal with the complexity of creating and maintaining a legal entity. It’s too much overhead, too early.

I’ve also covered why the current system requires us to create those entities and why it doesn’t make as much sense as it used to before the Internet.

In this second and last part, I want to share with you how we could abstract the complexity of the current system to create entities with much less friction.

### The way it should work

Picture this: you want to create a parents association for your school or you want to collect money to organize events for your community. This is the way it should work:

1. Create a group online. Give it a name and explain its purpose. Define the administrators.

1. Get a page where you can collect money by credit card.

1. On that page, any member can see how the money is used and how much is left at any time. Any member is also able to submit expenses for reimbursement.

That’s it. It shouldn’t be any more complicated than that. No need to create a bank account, no need to deal with lawyers. And because all transactions are transparent, you shouldn’t be required to submit financial reports.

The best user interface is an interface that gets out of the way. An interface that disappears, that doesn’t distract you, that lets you focus on your work. The same applies to a legal framework.

This would be ideal for all our side projects such as open source projects, meetups, sport clubs, parent or neighborhood associations, boy scouts, unions, movements, or even starting a new startup before reaching “Product Market Fit” or raising a significant amount of money.

### How to make this work?

Unfortunately today you cannot collect money without a bank account and you cannot create a bank account without a legal entity.

Changing the law is not an option. There are too many governments around the world that we would have to convince. Plus they also have good reasons to keep the system as is. They need to protect themselves from money laundering ([AML](https://en.wikipedia.org/wiki/Money_laundering)) and other abuse ([KYC](https://en.wikipedia.org/wiki/Know_your_customer)).

But there is another way.

We could piggy back on existing bank accounts and create a virtual layer on top of them. Read on.

### Mutualized resources

When you start a new website, you should first use a mutualized server like [Dreamhost](https://dreamhost.com) or [Heroku](https://heroku.com). That way you can get up and running in no time and move on. It’s only once you get enough traction that you should consider upgrading to a dedicated server.

The same should apply to the creation of an entity for your side project or association. You should be able to rent a virtual instance of an existing entity with its bank account. It’s only once your project reaches a certain size that you should consider upgrading to your own dedicated entity with all the stability, legal protection and overhead that come with it.

### A network of hosts

For this to work, we need a network of host organizations; legal entities that will host virtual organizations under their umbrella. They will shield end users from the complexity of creating and managing a 20th century entity. Each of those hosts will empower people in their community to create or terminate associations without friction.

If we can do this, we will foster an explosion of bottom up initiatives that will not be limited to activities that don’t require money. Those initiatives will finally be able to collect money, have a budget and have a larger impact.

### How can we build such network globally?

We can get inspiration from the way we built data centers around the world to power what we refer to today as “the cloud”.

We basically created software that anyone could deploy in their own country to create and manage local data centers. It didn’t matter that the local regulations in Belgium or the United States were different. That complexity was dealt with locally by each data center. What mattered was that once set up, all those servers could speak the same language and offer a unified interface to all, globally.

That’s what we need to do. We need to build software to enable any organization to easily host a new ligthweight form of association for the Internet generation: open collectives.

### Definition of an Open Collective

I define an Open Collective as a lightweight association that can collect and disperse money transparently without creating a legal entity. Because it operates in full transparency, it can safely be hosted by an existing legal entity (an organization or an individual) that will in practice collect the money on behalf of the collective and report its activities in accordance to local legislations.

### Incentives for the host

What will be the incentive for the host? It will depend. For some like [Women Who Code](http://womenwhocode.com), the incentive would simply be to grow their movement. They want anyone in the world to be able to start a local chapter, raise money and organize events without having the burden to create a legal entity.

For others, the incentive would be the business opportunity to make money. In the same way that people are willing to pay more for the convenience to use Dreamhost or Heroku to host their website, people will be willing to pay a fee to host their collective.

### What about abuses?

How do we make sure that terrorists organizations and scammers don’t abuse the system to quickly collect money, disband and disappear? After all, the complexity imposed by governments also had the purpose of avoiding those abuses.

It’s important to understand that through this concept of virtualization we are not avoiding existing legislations. We are just moving the burden of compliance away from the end user and towards a distributed network of “host organizations” who are familiar with local legislations.

Because those hosts are distributed, they are closer to the real activities of the open collectives that they host. As such, they can do a better job at controlling those activities than what a centralized government could possibly do. And most importantly, with much less bureaucracy.

And because all transactions are recorded and visible by a larger group of people, it’s also a safer framework than the current one to quickly identify and report abuse. Governments should welcome this as a much more efficient way to track the activities of all those associations, levy taxes automatically and avoid abuse. All that while at the same time empowering their citizens to create many more associations and more economic activity.

There are still many open questions that we will have to figure out along the way: “How can you trust a host organization?” and “How — as a host — can you trust an open collective?” 
Those questions are very similar to the ones we had in 1994: “how can I trust a web host to host my content?”, “how can I trust a customer that they won’t put inappropriate content on my servers?”, “who is responsible? The content creator or the web host?”, “As a host, how quickly am I supposed to take a piece of content down?”. We eventually figured out answers to those questions over time, so I’m confident we will also eventually find answers to those questions.

### Moving forward

We already built a first prototype of that software. It basically allows an organization (or an individual) to create virtual collectives, each with their own budget, their own interface to submit expenses and their own public page to collect money. Right now, it only works on top of PayPal for reimbursements and Stripe for credit card processing. Our goal is to eventually support other means of payment, including Bitcoin.

We already have a few private beta testers (including [Women Who Code](http://womenwhocode.com), [see part 1](http://medium.com/@xdamman/a-new-form-of-association-for-the-internet-generation-part-1-6d6c4f5dd27f), and [Yeoman](http://yeoman.io), a popular open source project). We already have some Angel Investors (including [Dries Buytaert](http://buytaert.net), founder of Drupal, [see part 1](http://medium.com/@xdamman/a-new-form-of-association-for-the-internet-generation-part-1-6d6c4f5dd27f)). But this is still very early days.

We need more groups to join our private beta. We also need more organizations to host open collectives in their country and/or communities. We need engineers to adapt the software to local payment systems (we love bitcoin but we need to support first and foremost local currencies). And we also need lawyers to help the community navigate through existing financial regulations, risks, etc.

We hope that this will help our communities collect the money that they need to be stronger while at the same time being more accountable to the people who finance them. We also hope that this will empower anyone to build the movements, unions, political parties, lobbying groups, NGO and communities — large or small — of tomorrow, wherever they are.

We can do this.

Together.

*If this resonates with you please get in touch (xdamman@opencollective.com). Feel also free to share publicly your own personal stories or feedback with the #OpenCollective hashtag. We are interested in hearing more about those times when you needed to collect money for a project, a group or an association. What were the pain points? How did you make it work? What could be improved? What tools are missing?*

Visit our [website](https://OpenCollective.com), follow us on Twitter [@OpenCollect](https://twitter.com/OpenCollect) or join our Slack [https://slack.opencollective.com](https://slack.opencollective.com)

*Thanks to [Aseem Sood](undefined), [pia mancini](undefined) and [Burt Herman](undefined) for having read and contributed to drafts of this post.*
