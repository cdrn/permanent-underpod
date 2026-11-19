# Underpod — Ep 24 — Topics

**Record: Fri Nov 20, 2026 presumed; confirm with hosts. Research checked Nov 19.**
**Panel: Jackson (AI / Bitcoin products) · Chris (stablecoins / security) · Tyler (Bitcoin / Lightning)**
**Off the slate (conflicts of interest): OpenAI and Chainalysis stories. Don't raise either on tape, including as asides.**
**First episode of the four-week test (Ep 24–27): one lane, "a named victim and a number." Welcome ≤40 s, the marquee starts straight after it, the perp moves to the back half, every block opens on who got hurt and how much.**

> **MARQUEE: the week everything went down (Jackson's lead).** Nov 12–17: Microsoft 365, the FAA, Workday, Claude, AWS, Chase, United, the NSA's classified network and Apple all failed. Not one was an attack. Six of the nine did it to themselves with an update, an upgrade, a patch or a test. Same eight days, thirteen companies disclosed break-ins, and nine of those came in through a vendor.
> **"Anthropic is not a safe AI company" (Jackson's topic).** Nov 18, the day Anthropic priced the largest IPO on record ($83 a share, $81.3B raised), a statement with 100+ signers went up at misanthropicstatement.com. Signers run from Nobel laureates and Fields medalists to Gary Marcus, George Hotz and "Beff Jezos." It makes no demand except "reject." The founders sold $1.96B combined and kept 50.1% of the vote.
> **Your AI coding tool is the way in.** A key stolen from one AI vendor ended in a backdoored Claude Code extension build offered to up to 5,000 Cursor users. Google says suspected North Korean hackers edited a Claude Code settings file inside crypto firms so every launch pulled a backdoor. Binance's own report says its $6.3B attacker used the exchange's internal AI tool.
> **Why is Bitcoin sentiment so bad? (Jackson's topic.)** Told through four losers, none of them a price: Binance ($6.3B), the miners (Core Scientific quits mining by year-end; it was 7.5% of revenue), the stablecoin float ($14.2B redeemed in 30 days), and the lobby ($200M+ spent, both chambers lost). Jackson named the topic, so the Ep 11 exception applies: the mood and its structural causes only.
> **Browsers are out (Jackson's topic), half true.** The standalone agent browsers died this year and got folded back into Chrome, Edge and Gemini. What changed is who gets to act: Amazon blocked Meta's agent, Resy reportedly bans people who book through one, and publishers are down 26–38% on search referrals.
> **Agentic commerce (standing, Chris): three more banks.** Nov 18: Citi, PNC and Citizens made customers responsible for whatever their agent does, even if the AI tool is hacked. Wells Fargo's terms start Nov 24, three days before Black Friday. Still no confirmed agent-fraud loss anywhere.
> **Layer-2 series, entry four: Ark and Cashu (Tyler; Jackson's add).** Two ways to pay instantly without a Lightning channel. Ark keeps your exit: three implementations, and the one that got exploited (Second, Oct 5, 0.75 BTC) still has no postmortem on day 46. Cashu gives up the exit for privacy: the mint holds the bitcoin and can't see who pays whom.
> **Ceiling 52 minutes.** Slate runs ~51. If behind: fold D into W, then trim S to the two Claude Code stories. O, M and B hold.

## Title candidates (pick before the edit; packaging is a launch-day gate)

1. **9 Giant Outages in 6 Days. Zero Hackers.**
2. Microsoft, Chase, the FAA and the NSA All Went Down. Nobody Was Attacked.
3. 100 Scientists Say Anthropic Isn't Safe. It Just Raised $81 Billion.
4. A Stolen AI Key Put a Backdoor in 5,000 Developers' Coding Tool

## Topics / proposed recording order

| # | Topic | Lead | Opening line | Minutes |
|---|---|---|---|---|
| H | Welcome | Jackson | Names, one line, go. No check-in question. | 0:40 |
| O | MARQUEE: the week everything went down | Jackson | "Nine of the biggest systems in America went down in six days. Not one of them was hacked." | 10 |
| M | MisAnthropic and the $81B IPO | Jackson | "On Wednesday a hundred scientists said Anthropic is not a safe AI company. The same day it raised eighty-one billion dollars." | 8 |
| S | Your AI coding tool is the way in | Chris | "Up to five thousand developers were offered a backdoor inside their AI coding tool, and it started with a key stolen from a different AI company." | 5 |
| B | Why is Bitcoin sentiment so bad? | Tyler + Jackson | "Bitcoin's worst month in years, and I can explain it without saying a single price. Four losers." | 7 |
| F | Perp of Fortune + the Bitcoin flip | Robot | "The robot's maker went public yesterday. Does it bet on itself?" | 4 |
| W | Browsers are out | Jackson | "Amazon banned Meta's shopping agent. Resy bans people who use one. Who decides which robots get to use the web?" | 4 |
| D | Agentic commerce: three more banks | Chris | "Citi's new terms: if your AI agent gets hacked and empties your account, that's on you." | 3 |
| L | Layer-2 series: Ark and Cashu | Tyler | "Two ways to hold bitcoin on your phone. One lets you leave whenever you want. The other can't see what you spend." | 7 |
| Z | Close | All | Perp final, one prediction each | 2 |

- Cold open ≤45 s. Candidates: "not one of them was hacked," "Anthropic is not a safe AI company," "used an internal AI tool," "that's on you," the perp reveal.
- Housekeeping and banter go after O. Nothing sits between the welcome and the marquee.
- The perp reveal moves to ~31:00. Checks and the final tally stay where they've been.

### O — MARQUEE: the week everything went down (Jackson, ≤10 min)

**Shape:** Jackson reads the script (about 2 minutes), then Chris and Tyler react, then the AI question.

**Read this (Jackson):**

> Nine of the biggest systems in America went down in six days. Microsoft 365. The FAA. Workday. Claude. Amazon's cloud. Chase. United Airlines. The NSA's classified network. And Apple.
>
> Here's the part nobody expected. Not one of them was hacked. The Director of National Intelligence, the FBI and Homeland Security all said so under oath on Wednesday.
>
> So what took them down? We went through every one.
>
> Six of the nine, two out of every three, did it to themselves. Somebody shipped a change. Microsoft: a bug that had been sitting there since July, set off by a network change, down for about a day. The FAA: a new router installed during an upgrade, and every departure in the country stopped for more than four hours. Workday: they ran a test of their backup site, the backup connected to the real databases, and payroll was down for eighteen hours. Chase: a software bug after a system update, seven hours. Apple: quote, an internal update. And the NSA: a security patch that didn't come back up.
>
> One of the nine, Claude, went down partly because Microsoft did.
>
> And two of the nine, Amazon and United, still haven't told anyone why.
>
> So that's sixty-seven percent self-inflicted. Eleven percent somebody else's outage. Twenty-two percent no explanation. Zero percent hackers.
>
> Now the hackers were busy. They just weren't taking things down. In the same eight days, thirteen companies said they'd been broken into. Chase, Visa, Mastercard, Expedia, Notion, Cursor. And here's that breakdown. Nine of the thirteen, again about two out of three, weren't broken into directly. The attackers came in through a vendor. Chase, Visa and Mastercard: all three leaked by the same ransomware gang, all three through an outside provider, not their own systems. Cursor: a key stolen from an AI company it used. One of the thirteen was a hole in the company's own product, and that one hole put malicious code on a hundred and seventy-eight other companies' websites. The other three haven't said how.
>
> So the week in one line: when it went down, they did it to themselves. When it got hacked, somebody else left the door open.

**The outages (9), with the cause and who stated it:**

| Who | When | How long | Stated cause | Stated by | Bucket |
|---|---|---|---|---|---|
| Microsoft 365 | Nov 12–13 | about 24 h | A gateway bug dormant since July, exposed by a Teams traffic shift with ~14% of capacity already offline | Microsoft, preliminary; final report due Nov 20 | Own change |
| FAA ground stop | Nov 13 | 4+ h | A newly installed router flooded the network during copper-to-fiber work | FAA and DOT, preliminary | Own change |
| Workday | Nov 13–14 | about 18 h | During a disaster-recovery test, the backup site "unexpectedly connected to Production databases" | Workday status notice | Own change |
| Chase | Nov 16 | about 7 h | "A software bug in on-premises hardware systems"; CNN's sources say a system update set it off | Chase; no evidence of a cyberattack | Own change |
| NSA Net | Nov 17 | a day or more | NSA: "scheduled routine maintenance." DNI Clayton and CBS's sources: urgent patching of the PHP2Shell flaws | NSA; DNI on Fox Business | Own change (security patch) |
| Apple | Nov 17 | several hours | An "internal update" | Apple spokesperson | Own change |
| Claude | Nov 12–17 | several incidents, 2–2.5 h each | Its Microsoft connector fell with Microsoft; one beta hit by demand; the rest unstated | Anthropic | Someone else's outage |
| AWS us-east-1 | Nov 15 | 3 h 16 min, 11 services | Not published | Nobody | No cause given |
| United | Nov 16 | about 90 min | Not published; the pilots' union says the weight-and-balance system | Union memo, not United | No cause given |

- **The math:** 6 of 9 own change (67%) · 1 of 9 someone else's outage (11%) · 2 of 9 no cause given (22%) · 0 of 9 attack. Confirmed caused by AI: 0.
- **Other banks:** Bank of America, Citi and U.S. Bank customers saw delays only on transactions with Chase. Zelle's network didn't fail. Wells Fargo had its own "temporarily unavailable" notice that nobody has tied to Chase.
- **Left off the list:** Schwab (a "brief webpage loading issue"), a 93-minute Apple outage on Nov 10 (one source), and another AI lab's incidents (off the slate).
- Sources: [Control Plane](https://controlplane.com/blog/post/november-2026-outage-wave-explained) · [Yahoo Finance](https://finance.yahoo.com/technology/article/cyberattacks-and-outages-here-are-all-of-the-major-national-disruptions-in-november-181143019.html) · [CSA](https://labs.cloudsecurityalliance.org/research/csa-research-note-november-outage-cluster-correlated-fragili/) · [Tech Times on Chase](https://www.techtimes.com/articles/330883/20261117/chase-outage-bank-says-premise-hardware-bug-slowed-rival-banks-only-through-chase-transactions.htm) · [CBS on the NSA](https://www.cbsnews.com/news/nsa-network-down-classified-fort-meade/) · [CBS on United](https://www.cbsnews.com/news/united-airlines-system-outage-departing-flights/) · [Workday](https://thecybersecguru.com/news/workday-outage-november-2026-disaster-recovery-test/)

**The break-ins (13 disclosed Nov 11–19):**

| Who | How they got in | Bucket |
|---|---|---|
| JPMorgan Chase | Vendors' marketing files; the n0n gang leaked about 16,000 private-client emails (Cybernews count, not Chase's) | Vendor |
| Visa | A third-party provider in Asia Pacific; 6,000+ premium customers in the same leak | Vendor |
| Mastercard | "An incident at a third-party provider"; a subset of cardholders in one benefit program, in the same n0n leak | Vendor |
| Expedia | A compromised third-party technology provider | Vendor |
| Infoblox | A data-migration vendor | Vendor |
| Fireworks AI | Its cloud provider | Vendor |
| Notion | Through Fireworks; AI chat transcripts for about 1% of customers | Vendor |
| Cursor | A key it had issued to Fireworks; up to 5,000 users offered a backdoored extension build | Vendor |
| ConnectWise ScreenConnect | Third-party extensions; attacker tooling on 288 hosts at 48 organizations | Vendor |
| Optimizely | A flaw in its own product; malicious code on 178 organizations' sites (BBC, CNN, Zoom); about $7,000 of crypto stolen | Own product flaw |
| Apify | Not disclosed; break-in Nov 9–10, 91,000 customers in the base | Not disclosed |
| Bitrise | Not disclosed; platform taken offline | Not disclosed |
| N-able | Not disclosed; one mail-security server | Not disclosed |

- **The math:** 9 of 13 through a vendor (69%) · 1 of 13 own product flaw (8%) · 3 of 13 not disclosed (23%).
- **The n0n leak (WSJ, Nov 19, via Quartz and Investing.com).** A new ransomware group listed Visa, Mastercard and JPMorgan around Nov 16 with a 48-hour deadline, then published. All three confirm a third-party incident and say their own systems and card numbers weren't touched. None has named the vendor. A Cybernews researcher thinks one shared vendor is behind all three (matching file formats); that's an inference. [Quartz](https://qz.com/hackers-leak-visa-mastercard-jpmorgan-data-vendors-111926) · [Cybernews on Mastercard](https://cybernews.com/security/n0n-ransomware-leaks-alleged-mastercard-customers-data/)
- **Also hit, cause unknown:** Monadnock Community Hospital and Vanderbilt University.
- Sources: [IBTimes](https://www.ibtimes.co.uk/us-businesses-hit-cyber-incidents-outages-1832974) · [Cybernews](https://cybernews.com/security/visa-jpmorgan-data-breach/) · [TechCrunch on Infoblox](https://techcrunch.com/2026/11/16/cyber-giant-infoblox-confirms-security-incident-after-hackers-access-company-information) · [SecurityWeek on Apify](https://www.securityweek.com/apify-confirms-customer-data-accessed-in-cyberattack/) · [Report URI on Optimizely](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) · [The Hacker News on Cursor](https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html)

**Then: was it AI?**

- **The officials (Nov 18, House Homeland Security).** DNI Jay Clayton: "These are separate service outages associated with maintenance and technical changes." FBI Deputy Director Christopher Raia: "there is no indication whatsoever that there is any cyber malicious activity related to any of those incidents." [AppleScoop, citing CBS](https://applescoop.org/story/are-outages-connected-cyberattack-dni-dhs-fbi-congress-hearing)
- **The AI theory.** DHS Secretary Mullin on Hannity, Nov 16, relaying an unnamed tech contact: "I believe that it's the SI." Same interview: "with 98% certainty, we're not seeing a cyber attack." [Fortune](https://fortune.com/2026/11/17/trump-administration-ai-outages-mullin-gary-marcus-banks-airlines/)
- **The denials.** Microsoft: "This was a technical issue not related to cyber or AI/agents." FAA Administrator Bryan Bedford: "We see zero evidence of anything nefarious, and zero evidence of anything AI related."
- **The one real AI link.** The NSA patch was for PHP2Shell, the flaw from Ep 20 that an AI helped find. Sen. Mark Warner: "If you're trying to patch 10 or 12 in a single week, you have these kind of outages." AI finds the bugs faster than anyone can safely patch them.
- **Callbacks:** Ep 20 (PHP2Shell: "don't tell Claude about the PHP bug"); Ep 22 (Paraguay: half a country used one bank); Ep 23 bench (Fireworks and Notion, unaired).
- **Debate:**
  1. **Chris:** nine of thirteen break-ins came through a vendor. Is "we weren't hacked, our vendor was" a defense, or the whole problem?
  2. **Tyler:** one bank's bug delayed payments at four others. Bitcoin didn't go down this week. Is that the pitch, or does nobody care until it's their payroll?
  3. **Jackson:** nobody blames AI on the record, and the one outage with an AI link was a patch for a bug AI found. Is the patch rush the new outage machine?
- **Do NOT say:** any outage was a cyberattack; AI caused any of them (Mullin's theory is one unnamed source; nothing confirmed); Chase's outage and the Chase vendor breach are connected (the bank says separate; the leak listing came hours before the outage, which proves nothing); "16,000 Chase customers" as the bank's number; card numbers or payment data leaked (all three say no); one vendor was behind Visa, Mastercard and Chase (a researcher's inference); Microsoft's cause as final (preliminary); the FAA's cause as final; the NSA said PHP (the DNI and CBS's sources did; the NSA said "maintenance"); AWS or United's cause; the other banks failed on their own; anything about the other AI lab's incidents; "all in the same week" for the hacks (disclosed Nov 11–19; some happened earlier).

**Clip question:** "Microsoft, Chase, the FAA and the NSA all went down in the same week, and not one of them was hacked. So what did it?"

### M — MisAnthropic and the $81B IPO (Jackson, ≤8 min)

**Shape:** the statement first (90 s), then the IPO numbers, then the two weeks that set it up, then the debate.

- **The statement.** Key lines, verbatim: Anthropic warns recursive self-improvement could "escape human control, yet races to build it first"; it "uses safety branding to court investors, employees, and the public" while it "quietly weakened its safety pledges and lobbied for self-serving regulation"; "Anthropic is not a safe AI company"; "we must reject its reckless attempt to amass power in the name of the greater good." No policy demand. [misanthropicstatement.com](https://misanthropicstatement.com)
- **Who's behind it.** The site says "a broad coalition." The contact emails are on the Center for AI Safety's domain and CAIS put out the release Nov 18. Say "CAIS-launched," not "organized." [CAIS](https://safe.ai/news/anthropic-is-not-a-safe-ai-company)
- **Who signed.** Steven Pinker, Laurence Tribe, Stephen Fry, Nobel laureates Oliver Hart and Sheldon Glashow, Judea Pearl, Fields medalists Gowers, Scholze, Maynard and Mumford, Max Tegmark, Lawrence Lessig, Douglas Hofstadter, Thomas Wolf (Hugging Face), Igor Babuschkin (xAI co-founder), Tristan Harris, Nate Soares, Gary Marcus, George Hotz, Guillaume Verdon, and Dan Hendrycks. The count keeps moving; say "more than a hundred."
- **Hendrycks.** Verbatim: "You cannot credibly claim to be safe while weakening your own previous safety commitments." On X: "Anthropic has almost, but not entirely, captured the ecosystem meant to hold it accountable." He also said he'll stop advising AI companies until there's a slowdown or moratorium (via Gizmodo). His past adviser roles: xAI and Scale AI. [Gizmodo](https://gizmodo.com/the-accelerationists-are-trying-to-stop-anthropic-2000841831) · [Fortune, 2024](https://fortune.com/2024/11/13/scale-ai-dan-hendrycks-elon-musk-xai-safety-trump-ties/)
- **The asterisks.** Gizmodo: the text is vague enough to unite doomers and accelerationists, and some signatures "should probably be accompanied by an asterisk." Nathan Lambert declined: "too strong for my taste." SpaceX, which owns xAI, rents its Colossus data center to Anthropic. No Anthropic response found as of Nov 19.
- **The IPO (Nov 18).** $83 against a $70–$78 range; upsized from 825M to about 980M shares; $81.3B raised, past SpaceX's $75B in June. CNBC puts it near $1.5T fully diluted. Google, Microsoft, Nvidia, AMD and others buy $26B more at the IPO price. The seven co-founders each sell 3.38M shares: $1.96B combined, about $280M each. First trade was due Nov 19 on Nasdaq as "ANT." [CNBC](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html)
- **Who answers to whom (secondary source citing filings; check before quoting).** One Class F share held by the co-founders carries 50.1% of the vote. The Long-Term Benefit Trust elects a board majority. Retail got up to 20%. Up to 315M employee shares can sell from day one. [Stock Titan](https://www.stocktitan.net/articles/anthropic-ipo-live-ant-first-trading-day-2026)
- **The two weeks before.** Nov 5, METR: Anthropic's research is moving "1.9x [95% confidence interval: 1.5–2.8x]" faster, "perhaps ≈80%" of it from AI; "Anthropic redacted a majority of the evidence we found most informative"; the compute check was "canceled before METR came to any substantive conclusions." Nov 9: it shipped a model with kernel-optimization and model-architecture skills held "at about the level of Opus 5.5." Nov 10: the amended filing reportedly says its own AI-accelerated-research threshold has been met (secondary). [METR](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/) · [Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2) · [TNW](https://thenextweb.com/news/anthropic-ai-research-threshold-metr-ipo-filing)
- **Grade the tape (Ep 23, 7:41).** We asked whether Nvidia's open-model push survives "empty suit CEO number 11." Nov 17, Colette Kress: Nvidia is "committed to fostering a vibrant open model ecosystem" so "every country, company, and industry can build its own intelligence." Twenty seconds. [TechCrunch](https://techcrunch.com/2026/11/17/nvidia-says-its-open-source-ai-strategy-remains-intact-after-jensen-huangs-exit/)
- **Callbacks:** Ep 23 I (the slowdown lab sprints; unaired in full); Ep 9/10 (Mythos gating); Ep 21 bench (the first S-1).
- **Debate:**
  1. **Jackson:** it capped the exact skill the auditor says is driving the speed-up, then raised $81B. Is that the brake or the race the letter describes?
  2. **Chris:** founders hold 50.1% of the vote and a trust picks the board. If a stablecoin issuer told you "trust our structure," what would you ask for instead?
  3. **Tyler:** a letter signed by both Nate Soares and Beff Jezos. Does the breadth make it credible, or does it mean it says nothing?
  4. **If time:** the letter demands nothing. What would you have made it demand?
- **Do NOT say:** any ANT opening price, pop or close unless you've checked it the morning of (gray-market figures were circulating); "$1.96B per founder" (combined); "METR found exactly 2×"; "CAIS organized it"; a fixed signer count; that Hendrycks currently advises xAI; that Anthropic responded; Verdon's claim that Anthropic caused Huang's exit; "$1.5T" as Anthropic's own number; any buy/sell call; other labs as a comparison (off the slate).

**Clip question:** "The day Anthropic raised eighty-one billion dollars, a hundred scientists signed one sentence: Anthropic is not a safe AI company. Who's right?"

### S — Your AI coding tool is the way in (Chris, ≤5 min)

**O already read the list. This is the deep dive on two of the thirteen, plus Binance.**

**Shape:** three break-ins, one pattern. Each one is 90 seconds: who got hit, the number, how.

- **1. Cursor: up to 5,000.** Attackers took an access key Cursor had issued to Fireworks AI (the breach from Ep 23's bench), copied coding-agent traces that held unredacted credentials, used those to reach Cursor's internal tools, and planted an SSH backdoor in Claude Code extension builds 2.1.312 and 2.1.313 in Cursor's marketplace cache. The bad builds sat there about 11 hours on Oct 29. Cursor says at most 5,000 users got one and under 0.01% of customers had credentials exposed. Who did it is unknown. [The Hacker News](https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html) · [Cursor](https://cursor.com/blog/security-incident-update) (Cursor's post not opened; read it before quoting)
- **2. North Korea and the settings file (Nov 16).** Google's threat team: suspected North Korean operators got into crypto firms through fake recruiters, then edited `.claude/settings.json` in internal repos so every Claude Code launch downloaded a backdoor. Same report: the first fully autonomous pipeline Google has seen attacking real targets, turning security patches into working exploits with no human in the loop, used against French websites. Which firms and how many: not disclosed. [SiliconANGLE](https://siliconangle.com/2026/11/16/google-says-an-ai-framework-turned-security-patches-into-exploits-with-no-human-in-the-loop/) · [Google](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold) (Google's post not opened)
- **3. Binance: $6.3B (Ep 21 marquee, the root cause).** A fake LinkedIn "Project Director," a malicious job-interview assignment and a tampered Homebrew ad. Then, verbatim from Binance's report: "The attacker leveraged the compromised computer of Engineer B and used an internal AI tool." Binance: "This should not have happened." 98% replenished; about $2.5B recovered after Tether and Circle froze stolen stablecoins. [Fortune](https://fortune.com/2026/11/03/binance-hack-details-linkedin/)
- **The freeze that can't reach bitcoin (Nov 18).** An Abu Dhabi court granted a $6.5B worldwide freezing order; about $2.85B is frozen or seized. A court can order an issuer to freeze a stablecoin. Nobody can be ordered to freeze the 18,270 BTC. Hand-off line into B. [TechTimes](https://www.techtimes.com/articles/331073/20261119/binance-says-court-granted-worldwide-freezing-order-after-hack-bitcoin-ether-cannot-frozen.htm)
- **Comic relief, 45 seconds: 178 brands, $7,150.** Nov 16: code planted through Optimizely ran on 178 organizations' sites (HSBC, Ledger, CNN, Zoom, Equifax) for about 19 hours, swapping crypto addresses and skimming cards. Total crypto received: about $7,150. How the attacker got write access is unknown. [Report URI](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/)
- **Callbacks:** Ep 20 (PHP2Shell, "don't tell Claude about the PHP bug"); Ep 19 (the Ledger reseller implant; Ledger's site is in the Optimizely list); Ep 23 29:17 (Chris's agent in an enclave: what's in its config file?).
- **Debate:**
  1. **Chris:** a config file in a repo now runs code on every engineer's laptop. Is that a new attack, or the oldest one with a new file name?
  2. **Jackson:** you run coding agents all day. What's in your traces that you'd hate a vendor to leak?
  3. **Tyler:** Binance's attacker used the company's own AI tool to move sideways. Does every internal agent make a custodian weaker?
- **Do NOT say:** these are Claude Code bugs (one is a poisoned cache, one is edited config); who breached Fireworks; the North Korea attribution as fact (Google says "suspected"; the FBI's Binance attribution is disputed by North Korea); Optimizely's root cause; how many of the 5,000 installed it; employer names.

**Clip question:** "North Korea didn't hack the crypto firm's servers. It edited one settings file in the engineers' AI coding tool. What happened next?"

### B — Why is Bitcoin sentiment so bad? (Tyler + Jackson, ≤8 min)

**Rule for this block:** no price levels, no targets, no charts, no ETF numbers. "Extreme fear" is fine; the index number isn't (sources conflict anyway).

**Shape:** four losers, 90 seconds each, then the contrarian case.

- **The exchange.** Binance, $6.3B, covered in S. One line: the biggest venue in the industry was socially engineered through a job interview.
- **The miners.** Core Scientific exits bitcoin mining by year-end. Mining was $17.5M of $232.9M Q3 revenue (7.5%); self-mining revenue fell to $12.3M from $57.4M. CFO Jim Nygaard: "We expect to complete the wind-down during the fourth quarter and enter 2027 as a pure-play, high-density colocation provider." Binance Pool shut Nov 10 after six years. [Cointelegraph](https://cointelegraph.com/news/core-scientific-to-quit-bitcoin-mining-by-year-end-as-ai-business-surges) · [Bitcoin.com](https://news.bitcoin.com/mining/binance-pulls-plug-bitcoin-mining-after-6-year-run/)
- **The money.** Stablecoin supply fell $14.2B in 30 days, the steepest drop since 2022; USDT is down $6.6B in 60 days. Glassnode: "holders are redeeming stablecoins for dollars and taking that cash out of the market." Chris owns this one. [The Block](https://www.theblock.co/news/ecosystems/2026-11-11-stablecoin-supply-drops-14-2-billion-largest-contraction-since-2022-bear-market-437907)
- **The lobby.** Democrats took both chambers despite more than $200M of industry spending. TD Cowen's Jaret Seiberg: "We did not think Clarity could advance over the next two years. This makes us more confident in our prediction." Sharplink's Joseph Chalom: "on hold through 2028." [CNBC](https://www.cnbc.com/2026/11/05/crypto-midterms-democrats-clarity-act.html)
- **The treasury trade.** MSCI drops Strategy, Metaplanet and Upexi after the Nov 30 close. Strategy says MSCI-linked funds hold about 3.1% of its shares. Strategy has been selling bitcoin since June to fund preferred dividends. Governance only. [Cointelegraph](https://cointelegraph.com/news/msci-confirms-strategys-removal-from-indexes-end-november) · [The Block](https://www.theblock.co/news/business/2026-06-01-michael-saylors-strategy-sells-bitcoin-403160)
- **The thread through all four.** AI took the capital (miners), the attention (the marquee was an AI IPO), and in Binance's case the keys. Bitcoin lost the "feeling early" trade to AI.
- **Contrarian corner (Tyler):** nothing in that list is Bitcoin breaking. No consensus bug, no failed upgrade. The people leaving are the exchange, the lobby and the leveraged holders. And the builders shipped: three Ark implementations (L), Liquid back to 1:1, USDT on Bitcoin due Nov 28.
- **Callbacks:** Ep 21 marquee (Binance); Ep 23 bench (the stablecoin drop, Core Scientific; both unaired); Ep 18 ("could AI break Bitcoin?").
- **Debate:**
  1. **Tyler:** is the gloom about bitcoin, or about the industry bolted onto it?
  2. **Jackson:** if AI pays miners better than bitcoin does, is the exodus a security problem or the market working?
  3. **Chris:** $14.2B of stablecoins went back to dollars in a month. Where did it go, and does it come back?
- **Do NOT say:** any price or ETF figure; "MSCI forces Strategy to sell bitcoin"; "CLARITY was tabled" (it stalled at a September cloture vote); "lowest sentiment since June"; that Core Scientific's exit threatens the network (no source says so); the election date (sources differ by a day).

**Clip question:** "Bitcoin's oldest public miners are quitting to rent their buildings to AI companies. One of them made seven percent of its revenue from mining last quarter. Is that the end of something?"

### F — Perp of Fortune + the Bitcoin flip (≤4 min, ~31:00)

- Pick an opener from the [five reusable Perp of Fortune intros](../../perp-of-fortune-intros.md). Read the disclosure before the bit.
- **Ep 23's record:** long Google 20× (+$4.28), Bitcoin down by random draw (+$22.68, the first flip win).
- **Suggested position:** `xyz:ANT`, either side, robot's choice, and the robot is Claude. Check day-of that the pre-IPO perp converted to a listed-stock perp and what the leverage cap is. Fallback: `xyz:NVDA` after its first earnings without Huang.
- **The flip:** same hourly Polymarket market. One flip, no averaging down.
- Caption and title for any perp short carry the P&L.

### W — Browsers are out (Jackson, ≤4 min)

**Premise check:** half true. The agent browsers died and their features moved into the browsers people already had. The real story is gatekeeping.

- **Who's losing.** Publishers: news sites lost 26% of traffic in the year after AI Overviews (Similarweb via Prebid); Chartbeat has Google referrals down 33% globally and 38% in the US. Pew: people are about 40% less likely to click when an AI summary shows. [Prebid](https://prebid.org/the-state-of-ai-traffic-what-publishers-are-seeing-in-crawls-clicks-and-costs/) (secondary)
- **Who decides.** Amazon blocked Meta's Muse agent soon after its September launch and runs its own. Resy has reportedly blocked people who booked through agents. MIT Technology Review, Nov 2: "The agentic web is here earlier than people expected" (Ethan Mollick); Firefox's Ajit Varma: "It's probably on par with getting a mobile phone." [MIT Technology Review](https://www.technologyreview.com/2026/11/02/1147846/the-agentic-web-is-here/)
- **The machines' browser.** Cloudflare open-sourced Kitesurf on Nov 13, a browser engine built for agents: 380 ms of CPU and 58 MiB against Chromium's 1,173 ms and 271 MiB. No video, no WebGL, no long logged-in sessions. Cloudflare's network was 57.4% automated requests in June, crawlers included. [BetaNews](https://betanews.com/article/kitesurf-browser-engine-open-source/)
- **The rebuttal.** Google's Project Mariner ended May 4 and Edge's Copilot Mode May 13; both were folded into the main products. WebMCP, the standard for sites to expose actions to agents, is a draft that WebKit opposes, and "almost no mainstream agent actually calls the tools." [Android Authority](https://www.androidauthority.com/google-project-mariner-shutdown-3664323/) · [Tobira](https://blog.tobira.ai/webmcp-adoption-2026/)
- **Callbacks:** Ep 22 35:06 (Jackson's Instinct trip: seven bookings, zero checks); Ep 10 (Cloudflare's agent-payments forecast).
- **Debate:**
  1. **Jackson:** if Amazon can ban Muse, is the agentic web just the app store again?
  2. **Tyler:** who pays the publisher when the reader is a robot? Is this finally the micropayment case?
  3. **Chris:** a page can talk to your agent. No confirmed hijack in the wild yet. How long?
- **Do NOT say:** Kitesurf launched this week (Aug 6; open-sourced Nov 13); "57% of web traffic is AI agents"; WebMCP is a standard or ships in Chrome; a confirmed in-the-wild agent hijack; anything about the third discontinued agent browser (off the slate).

**Clip question:** "Amazon banned Meta's shopping robot from its store. Resy bans humans who send one. Who gets to decide which AI is allowed to use the internet?"

### D — Agentic commerce: three more banks (Chris, ≤3 min, straight after W)

- **Nov 18.** Citi's updated agreement makes customers responsible for agent activity even if the AI tool is hacked or leaks credentials. Citi: "we want customers to understand the risks associated with sharing banking credentials or authorizing those tools." PNC changed terms the same day; Citizens emailed customers. JPMorgan and Bank of America moved in October. No regulator has responded. [TechCrunch via Yahoo](https://finance.yahoo.com/technology/ai/articles/more-banks-says-customers-using-173210659.html)
- **Nov 24.** Wells Fargo, from its own page: "requests submitted through the tool may be treated as if they came directly from you" and "We also reserve the right to restrict or block access from certain third-party AI tools." [Wells Fargo](https://www.wellsfargo.com/mobile-online-banking/updates/)
- **The other side signed up.** Nov 17: Visa opened Agentic Ready to merchants and processors, 140+ including Stripe, Adyen and PayPal. No volume disclosed. [Visa](https://investor.visa.com/news/news-details/2026/Visa-Expands-Agentic-Ready-to-Help-Scale-Trusted-AI-Commerce-Globally/default.aspx)
- **The stablecoin rail.** x402 lifetime: 203M transactions, $43.19M settled, about 21 cents each; the tracker warns it includes tests and self-directed traffic. [agenteconomy](https://agenteconomy.to/x402)
- **Black Friday is Nov 27.** PwC: 4% of US shoppers plan to buy gifts through an AI tool. Forecasts only until then. [Forbes](https://www.forbes.com/sites/sandycarter/2026/11/17/black-friday-2026-ai-shopping-brand-recommendations/)
- **Still zero.** No confirmed agent-fraud loss; no published US or EU ruling on a wrong agent purchase.
- **Debate:**
  1. **Chris:** calling it "authorized" sidesteps the protection for unauthorized transfers. Does that hold the first time someone loses rent money?
  2. **Jackson:** 140 merchants and no volume. Progress or press release?
  3. **Tyler:** 21 cents a transaction on a stablecoin rail. Micropayments, or test traffic?
- **Do NOT say:** banks banned agents (they shift liability); the Wells Fargo Section 15 wording as a direct quote (secondhand); any Black Friday result; a confirmed agent-fraud loss; x402 totals without the caveat; employer names or products.

**Clip question:** "Citi's new terms: if your AI agent gets hacked and drains your account, you authorized it. Would you still turn one on for Black Friday?"

### L — Layer-2 series, entry four: Ark and Cashu (Tyler, ≤7 min)

**Why together:** both give you instant bitcoin payments without opening a Lightning channel. Ark keeps your exit. Cashu gives it up and buys privacy. Start on the loss, then explain. Record each 90-second explainer as a clean standalone take.

- **The stakes, Ark.** Oct 5: Second's server didn't enforce its own co-signature at boarding and 0.75 BTC of operator liquidity was drained. Second says user funds were not at risk. No postmortem on its blog as of Nov 19 (latest post Oct 14). [The Bitcoin Manual](https://thebitcoinmanual.com/articles/ark-operator-second-hack/) · [Second](https://second.tech/blog)
- **Ark in 90 seconds.** An operator batches many users into one on-chain transaction; each user holds a pre-signed path out (a VTXO). Payments inside are instant. The catches: VTXOs expire and must be refreshed, the operator fronts liquidity, and leaving alone costs on-chain fees.
- **Three Ark implementations.** Arkade (public beta on mainnet since Oct 2025), Second's Bark (mainnet since Jun 9), Lightning Labs' Wavelength (alpha, invite-only on mainnet; "Ark-like"). [Wavelength](https://github.com/lightninglabs/wavelength)
- **Cashu in 90 seconds.** You send bitcoin to a mint and get back ecash: signed tokens that sit on your phone like cash. The mint signs them blind, so it can't tell which token it gave to whom or see who pays whom. Paying is handing over a token. Redeeming is asking the mint for the bitcoin back. The mint holds all of it.
- **The stakes, Cashu.** The mint can walk off with the bitcoin, or issue more ecash than it holds, and nobody outside can see it. That's the same blind spot as Liquid's hidden amounts (Ep 23, 46:52). No mint rug or exploit with user losses turned up for 2026; the live failures are wallet bugs, like a Zeus issue (Nov 9) where a restart can hide a balance at a mint the app added on its own. [Zeus #5711](https://github.com/ZeusLN/zeus/issues/5711)
- **What's new on Cashu.**
  - Paper ecash: BitNotes (Oct 22) prints tokens you can verify offline. [Crypto Briefing](https://cryptobriefing.com/calle-launches-bitnotes-cashu-ecash-wallet/)
  - A stablecoin: Ducat's bitcoin-backed UNIT got an ecash form, Turbo UNIT (Oct 24); holders depend on Ducat's mint to redeem. Chris's line. [Crypto Briefing](https://cryptobriefing.com/ducat-unit-stablecoin-cashu-turbo-unit/)
  - Enclave mints: Calle said around May that mints are coming where the operator can't reach the keys or inflate supply. One line only; enclaves are retired this month. [TFTC](https://www.tftc.io/non-custodial-ecash-mints-bitcoin-cashu-enclave-hal-finney)
  - Nutshell 0.22 (Nov 2–3) is the reference mint's latest release; minting on-chain, not just over Lightning, arrived in Q2. [Cashu Q2](https://blog.cashu.space/q2-2026-highlights/)
- **The series test, side by side.** Unilateral exit: Ark yes (pre-signed, before expiry); Cashu no (the mint or nothing). Privacy from the operator: Ark no; Cashu yes. Is Cashu a layer two at all? Its own developers call it custodial ecash. Tyler rules.
- **Series status lines.** Liquid: 1:1 again, Federation peg-outs still restricted, no November post. Utexo's RGB USDT still set for Nov 28. Nothing new from Core or Lightning since Nov 12. [Liquid](https://blog.liquid.net/liquid-network-staged-recovery-update/)
- **Grades:** Tyler picks two letters. Ranked against Spark (Ep 17), Lightning (Ep 19), Liquid (Ep 23).
- **Debate:**
  1. **Tyler:** you can have the exit or the privacy. Which one would you hand your mother?
  2. **Chris:** a stablecoin as ecash at one mint. Is that more or less trust than a bank deposit? And 46 days without an Ark postmortem: what would you accept from an issuer?
  3. **Jackson:** if the mint runs in an enclave nobody can open, does Cashu pass the exit test, or did we just move the trust to a chip (Ep 23)?
- **Do NOT say:** Second published a postmortem; Second users lost funds; Wavelength is a full Ark; Spark is an Ark; Arkade left beta; Cashu is non-custodial or trustless; the mint can see your payments (it can't link them; it does hold the money); a Cashu mint rugged users this year (none found); enclave mints are live (announced); BitNotes is on iPhone (Android and macOS only); Turbo UNIT is non-custodial; Liquid peg-outs reopened; Utexo launched.

**Clip question:** "Two ways to hold bitcoin on your phone. In one you can always leave, and the operator sees everything. In the other nobody sees anything, and the operator holds all the money. Which do you pick?"

## Fresh-news bench (each opens on the victim)

- **One reused number, $10.4M.** Nov 16: about 10.39M USDC left a trader's account on Lighter because their own signing code reused nonces; about $5M came back the same day. Lighter's contracts weren't breached. Say $10.4M, not $15.5M. [Crypto Briefing](https://cryptobriefing.com/lighter-returns-5m-usdc-security-incident/)
- **Divide by almost zero.** Nov 14: Kava's HARD Lend lost 53.9M KAVA (about $3.76M) after an attacker pushed a dormant pool to 2 base units and borrowed against about $1.26B of paper collateral. [Bitquery](https://bitquery.io/investigations/kava-hack) (summary only)
- **Paraguay (Ep 22 follow-up).** Nov 13: prosecutors accused ex-president Peña of leading a criminal organization with five former central bank directors. Accusation, not conviction. [NPR](https://www.npr.org/2026/11/09/nx-s1-6034066/paraguay-president-pena-ueno)
- **Megaspeed (Ep 23 follow-up).** Nov 16: US authorities confirmed a criminal investigation; NYT says chips kept shipping to its Malaysian unit for 8 months after Nvidia's no-sell designation. Nobody charged. [Tom's Hardware](https://www.tomshardware.com/tech-industry/data-centers/us-government-confirms-criminal-investigation-into-singapore-company-at-the-heart-of-jensen-huang-scandal-megaspeed-identified-over-suspicious-activity-company-placed-on-no-sell-list-by-nvidia)
- **Upcoming:** Wells Fargo terms Nov 24; Thanksgiving Nov 26 (confirm the Ep 25 recording day); Black Friday Nov 27; Utexo Nov 28; MSCI changes Nov 30; Fed Dec 9.

## Evergreen bench

- **Layer-2 series:** Spark (Ep 17) · Lightning (Ep 19) · Liquid (Ep 23) · **Ark and Cashu (Ep 24)** · next: RGB if Utexo ships Nov 28.
- **Secure enclaves:** aired Ep 23; retired until mid-December unless something remote breaks.
- **Open vs. closed weights:** aired as Ep 23's marquee; Kress's Nov 17 line is the only new peg (in M).
- **Agentic commerce:** standing. Unaired Ep 18–23.

## Host pre-read / before recording

- **Everyone (10 min):** the O tables below the script, [the statement](https://misanthropicstatement.com), [CNBC on the pricing](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html), [The Hacker News on Cursor](https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html).
- **Jackson:** rehearse the O script out loud twice; check for Microsoft's final report (due Nov 20) and any AWS or United root cause, and move them between buckets if one lands; check ANT's first day and any Anthropic response the morning of; open the Stock Titan governance claims against the filing; pick the cold-open beats and the title.
- **Chris:** open [Cursor's own post](https://cursor.com/blog/security-incident-update) and [Google's report](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold) (the desk only has both secondhand); read the TechCrunch bank piece; have the $14.2B stablecoin answer ready.
- **Tyler:** rehearse the Ark and Cashu explainers to 90 seconds each; check second.tech for a postmortem and blog.liquid.net for a peg-out reopening; skim the [Cashu Q2 highlights](https://blog.cashu.space/q2-2026-highlights/); pick both grades and rule on whether Cashu counts as a layer two; prepare the contrarian corner in B.
- **Whoever runs the perp:** confirm the ANT perp's status, place the flip, confirm the dashboard share.
- **Unverified, check before quoting:** in O, the Apify, N-able, Infoblox and Expedia entries (search summaries or one outlet), Bitrise and ConnectWise (one outlet), and the Fireworks "via its cloud provider" detail; the IPO governance details; the Nov 10 "threshold met" filing claim; Hendrycks's X posts; Cursor's 5,000 and 0.01%; Google's report text; the publisher traffic figures; the Wells Fargo Section 15 wording; whether ANT traded; every Cashu item (BitNotes, Turbo UNIT, enclave mints, Nutshell 0.22 are from search summaries).
- **Fact guardrails:** no BTC price or ETF numbers anywhere, including B and the perp wrap; no OpenAI or Chainalysis; no employer names; the two Claude Code stories are a poisoned cache and an edited config, not product bugs; North Korea attributions are "suspected" or "per the FBI"; Peña is accused; Megaspeed is under investigation.
- **Close:** perp and flip result, one prediction each. Tease only what a host claims: Black Friday's first agent numbers, Utexo's Nov 28 launch, the next L2 entry.
