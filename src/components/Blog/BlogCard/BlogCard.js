import React from "react";
import { BlogList } from "../../../data/BlogData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./BlogCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function BlogCard() {
  return (
    <>
      {BlogList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 &&
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                }
                {list.demo_url.length > 0 &&
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read ➜
                  </a>
                }
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default BlogCard;
