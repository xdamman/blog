url: https://medium.com/@xdamman/introducing-tipbox-94cbb56eec61
date: Tue Jul 21 2015 22:03:58 GMT+0200 (CEST)


# Introducing Tipbox

An easy way to get anonymous testimonials for your next story.

We believe in journalism. Not in the copy pasting journalism that we often see today, but in the true original journalism. The one that is digging up stories to help us understand what’s happening in the world beyond what officials say, the one that is giving a voice to the voiceless so that they can be heard in our democracies.

There is one quote that encapsulate this idea very well that many attribute (wrongly) to George Orwell:
> # “Journalism is printing what someone else does not want printed, all the rest is Public Relations” — anonymous

We live by those words. That’s why we wanted to help journalists do their job, because we believe it’s an important work.

Today, most tools available to them to collect anonymous feedback are quite complicated. They require journalists and/or their source to install some software, or their organization needs to install the (excellent) SecureDrop but its *modus operandi* might be daunting and somewhat overkill for most journalists who are not working on NSA level leaks. As a result most journalists don’t use any tool and the sources have to use unsecure channels to get in touch with them. One classic workaround for those sources is to create a temporary fake email address to get in touch with a journalist. That used to work ok but in the last couple of years, most email providers started requiring a phone number to create an email address, making that process very complicated.

That’s why we wanted to provide a very easy tool that wouldn’t require any party to install any software but that would still ensure a high level of anonymity and security.

## How does it work?

You can create a Tipbox on [https://tipbox.is](https://tipbox.is). You just need to provide your email address and a subject line. If you have a PGP key associated to your email address and published on a public key server, we will give you the option to use it. That way, the tip will be encrypted end-to-end, from the browser of the source to your inbox (if not, we will still use PGP encryption but only from the browser of the source till our server, then the email will be sent in clear to your inbox).

![](https://cdn-images-1.medium.com/max/3502/1*RyGNhKzQmc4JUmAxg_9OBQ.jpeg)

Once the Tipbox is created, you will receive an email with a unique URL. You can share that URL wherever you see fit: Publicly on Twitter, on your website, at the end of a story that you published, in a call for testimonials, in a forum or in a Facebook or LinkedIn group, etc.

When a source clicks on that URL, it opens their browser to a familiar email interface where the recipient and subject line is already set and the from is set to “Anonymous” (they can edit that field if they wish). They can enter as much text as they want and they can attach a photo from their phone or any attachment (limited to 5MB for now).

Once ready, they just click “Send” and that’s it. The browser will encrypt their tip right from the browser before sending it through the network. And you will receive the tip with a random delay of 5 to 20 minutes (to desynchronize the logs as a precaution measure).

## Limitations

The primary limitation is that it’s a one-way communication channel. You can’t respond to a tip unless the source as put a way to contact them in the body of their anonymous tip.

The second limitation is that Tipbox relies on the security of the browser. As such, Tipbox will never be as secure as a software that both parties will install. That’s why Tipbox should never be used with a source that is already under active surveillance as there is a risk that an adversary tampers with the files being served to the user to include a key logger. To do so, they will have to know when they will use Tipbox (they would also have to circumvent the HTTPS security which is not trivial, but it’s technically possible so we have to tell you).

## Tips and tricks

Controlling where you share that URL is an important part of using Tipbox as it will give you some indication of where the tip comes from. If you ever receive a tip with the subject line that you have defined, you know for sure that it has to come through that particular URL.

You can create as many Tipboxes as you like as long as the subject line is different. This is very useful to track where a tip is coming from. For example, you could create a Tipbox that you would put in a Facebook Ad targetting a particular demographic.

## Funding

We got a $35k grant in support from the [Knight Prototype Fund](http://knightfoundation.org/funding-initiatives/knight-prototype-fund/) an initiative of the John S. of James L. Knight Foundation that supports early stage media and information ideas. We are very grateful to them. This grant expires end of July 2015 and from then on, we will be relying on your donations to maintain the service and add more features. We will operate Tipbox as an Open Collective, meaning that anyone can contribute to it technically (we welcome Pull Requests on [our Github account](https://github.com/xdamman/tipbox)), but also financially. And everyone will be able to follow the money and see how the fund are effectively used.

We also wanted to thank Orange Website, a free speech hosting provider based in Iceland who is offering us a dedicated server to ensure the security of the service. And of course all the people who contributed to the development of this tool: [@tgouverneur](https://twitter.com/tgouverneur), [@montogeek](https://twitter.com/montogeek), [@evilrabbit_](https://twitter.com/evilrabbit_) and [@philmod](https://twitter.com/philmod) and all the journalists who tested the service during the private beta. Thank you!

— Xavier ([@xdamman](https://twitter.com/xdamman)) & Mark ([@mdp](https://twitter.com/mdp))
