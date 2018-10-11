import React, { Fragment } from "react";
import ReadingContext from "../components/ReadingContext/index";
import Main from "./../components/Main/index";
import Header from "./../components/Header/index";
import { NavConfig } from "./../components/Nav/config";
import Nav from "./../components/Nav/index";

const content = `<h2>About Public People</h2>

<p>Public People makes news more effective at supporting accountability and democracy.</p>

<p>It does this by showing news about a person of political or civic interest in reverse chronological order. Presenting historical articles in this way helps you find articles that you might not otherwise find easily; it lets you see how the conversation about someone changes over time; and it lets you see how one publication differs from another in angle on the same story.</p>

<h3>Roadmap and progress</h3>

<p>We currently show news related to a person based on their name occurring in an article. That means news mentioning John Smith will be shown for all John Smiths, which is not always correct. This is an early simplification and we welcome suggestions to improve on this (see Contributing)</p>

<p>We're working towards a Minimal Viable Product right now and just want to get it into peoples' hands.</p>

<p>The longer-term goal is to build an ecosystem of loosely connected tools that each do what they do well, and also provide data exports to support other related tools and more in-depth investigation. We're explicitly trying not to build one big central network analysis hub combining all possible sources of information about someone or trying to visualise someone’s influence network.</p>

<h4 id="known-issues">Known issues</h4>

<ul>
  <li>
    It shows news articles that match a search for the person's first and last names as we have them in the data we get from http://pa.org.za. It's not intelligent about two people with the same name. So John Peter Smith and John James Smith will have all the same news listed for them, matching "John Smith".
    <ul>
      <li>If you encounter this a lot, let us know to know how urgent it is to solve.</li>
    </ul>
  </li>
  <li>It searches for first and last name, so it won't find much news for "cyril ramaphosa" because his first and last name are Matamela Ramaphosa
    <ul>
      <li>When you find instances like this, please let us know at public.people.project@gmail.com so we can fix their "Preferred Name" to be the one used in the news.</li>
      <li>Also let us know if someone's name has changed</li>
    </ul>
  </li>
  <li>It doesn't help you with spelling mistakes so if you don't immediately find someone, try different spellings, or just parts of their name.</li>
  <li>Their public job roles are from pa.org.za but our copy of that data is out of date right now - we'll start updating automatically soon</li>
  <li>The pages for people mentioned very frequently in the news load very slowly right now. We'll fix this as soon as possible. Some, like Jacob Zuma, don't load at all.</li>
</ul>

<h3>Privacy</h3>

<p>The people featured on Public People are those who choose a role in politics or public administration.</p>

<p>The information featured about those people is limited to information that is</p>
<ul>
  <li>Legally obtained</li>
  <li>
    Relevant to the public interest:
    <ul>
      <li>e.g. for the public to exercise their democratic rights</li>
      <li>This includes information needed to identify this person</li>
    </ul>
  </li>
</ul>

<p>Practically, we use the press and government publications as a benchmark for what may be shown about someone.</p>

<h3 id="contributing">Contributing</h3>

<p>We welcome public contributions in various forms. Additionally, using the information available on this site in other projects, however big or small, is also very valuable to the project. If you use the data or information on this site, please let us know how.</p>

<h4>How can you contribute?</h4>

<ul>
  <li>
    <h4>Programmers</h4>
    <ul>
      <li>Look at the <a href="https://trello.com/b/9TVRB4gb/public-people">prioritised task board</a> and identify tasks you can help with</li>
      <li>Join us in the #public-people channel on the <a href="https://zatech.github.io/">ZATech Slack</a> and let us know you’d like to contribute and how you think you can</li>
      <li>
        The open source repositories of this project are
        <ul>
          <li><a href="https://github.com/public-people/public-people-data">https://github.com/public-people/public-people-data</a> Website/Person API</li>
          <li><a href="https://github.com/public-people/scrape-news">https://github.com/public-people/scrape-news</a> News scrapers</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <h4>Anyone</h4>
    <ul>
      <li><a href="/contact">Let us know</a> of corrections or improvements to information about persons, their job history shown on the site, or mistakes in showing news about a person</li>
    </ul>
  </li>
</ul>`;

export default function AboutUsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header
        ql={ql}
        title="Contact Us | Public People"
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main utils="fadeIn">
        <ReadingContext content={content} />
      </Main>
    </Fragment>
  );
}

/* eslint-disable */

export const SiteMetaQuery = graphql`
  query AboutUs {
    site {
      ...aboutQueryFragment
    }
  }
`;

/* eslint-enable */
