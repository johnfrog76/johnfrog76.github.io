---
layout: default
title:  "Recipe App with React / TypeScript"
date:   2021-11-23 16:54:00
categories: main
---

This is a recipe app built with React and TypeScript. Components organized according to [Atomic Design][jekyll-at]

![homepage](https://github.com/johnfrog76/recipes-react-typescript/raw/master/images/home.png)

- Add and Edit forms use [Formik][jekyll-f]
- React router has changes to developer API [Router V6][jekyll-rr]
- Use [styled components][jekyll-sc]
- [link to repo][jekyll-abc]

{% highlight tsx %}
import styled from 'styled-components;

export const CoolComponent = styled.div`
  border: 1px solid ${props => props.theme.colors.pageBorderColor1};
  padding: 1rem;
`;

{% endhighlight %}


[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
[jekyll-at]:   https://atomicdesign.bradfrost.com/chapter-2/
[jekyll-sc]: https://styled-components.com/docs/
[jekyll-rr]: https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
[jekyll-f]: https://formik.org/docs/overview
[jekyll-abc]: https://github.com/johnfrog76/recipes-react-typescript/