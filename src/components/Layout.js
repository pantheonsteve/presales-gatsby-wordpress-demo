import React, { useState } from "react"
import Header from "./Header"
import FullWidthHero from "./FullWidthHero"
import FeaturedPost from "./FeaturedPost"
import DonateBlock from "./DonateBlock"
import RecentPosts from "./RecentPosts"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedImage from "../assets/images/featuredPost.jpeg"
import ImageOne from "../assets/images/articleImage1.png"
import ImageTwo from "../assets/images/articleImage2.jpeg"
import ImageThree from "../assets/images/articleImage3.jpeg"

const Layout = ({ children, bodyClass }) => {
  const { wpPost } = useStaticQuery(
    graphql`
      query {
        wpPost(slug: { eq: "recognizing-the-symptoms-of-arthritis" }) {
          title
          excerpt
          date
        }
      }
    `
  )

  return (
    <div id={"GatsbyBody"} className={bodyClass}>
      <Header
        sections={[
          { title: "About Arthritis", url: "#" },
          { title: "Treatments", url: "#" },
          { title: "Research Journal", url: "#" },
          { title: "Get Involved", url: "#" },
          { title: "Contact", url: "#" },
        ]}
      />
      <main id="site-content" role="main">
        <FullWidthHero
          title="Types of Arthritis"
          subtitle="There are more than 100 different kinds of arthritis and related
        conditions. Learn more about the major forms of arthritis and the
        treatment options available."
        />

        {wpPost && (
          <FeaturedPost
            tag="Understanding Arthritis"
            title={wpPost.title}
            description={wpPost.excerpt}
            date={wpPost.date}
            image={FeaturedImage}
            imageCaption="Someone wrapping their wrist in a blue athletic bandage."
          />
        )}

        <DonateBlock
          title="Support the Cause"
          description="The Stop Arthritis foundation provides scientific expertise and
          cutting-edge technology to support arthritis research. Your donation
          will help support our work to discover a cure and improve the lives of
          millions of people. We urgently need your support, please make a
          donation to the Stop Arthritis Foundation today!"
          subtitle="The Stop Arthritis Foundation is a qualified 501(c)(3) tax-exempt
          organization and donations are tax-deductible to the full extent of
          the law."
        />

        <RecentPosts
          posts={[
            {
              tag: "Understanding Arthritis",
              image: ImageOne,
              imageCaption:"",
              title: "Managing Chronic Pain",
              subtitle:
                "Get effective chronic pain management strategies for arthritis with valuable tips, personal stories, and a daily checklist.",
            },
            {
              tag: "Living With Arthritis",
              image: ImageTwo,
              imageCaption:"",
              title: "Overcoming your Arthritis Diagnosis",
              subtitle:
                "A life with arthritis is not easy. Read stories and learn copingmechanisms to face your challenges with courage.",
            },
            {
              tag: "Drug Guide",
              image: ImageThree,
              imageCaption:"",
              title: "Meloxicam",
              subtitle:
                "Meloxicam is a NSAID drug used to treat arthritis. It reduces pain,swelling, and stiffness of the joints. Brands include Mobic or Vivlodex.",
            },
          ]}
        />
      </main>
      <Footer
        description=" The Stop Arthritis Foundation works to research a cute for arthritis
      and support those living with it."
        contactInfo={[
          "101 Wonderful St",
          "Gatsby, DecoupledLand, 11072",
          "Contact Phone: 1 888 888 8888",
        ]}
      />
    </div>
  )
}

export default Layout
