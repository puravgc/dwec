import React, { useEffect, useState } from "react";
import "../index.css";
import articleLogo from "../assets/logo.png";
import newsArticleImage from "../assets/news article of  DWEC.jpg";
import doorToDoorImage1 from "../assets/Door to door visit by deputy mayor.png";
import doorToDoorImage2 from "../assets/Door to door visit by deputy mayor 1.png";
import doorToDoorImage3 from "../assets/Door to door visit by deputy mayor 2.png";
import doorToDoorImage4 from "../assets/door to door .png";
import sexualHealthImage1 from "../assets/Sexual and Reproductive Health.png";
import sexualHealthImage2 from "../assets/Sexual and Reproductive Health1.png";
import janakiCaseStudyImage1 from "../assets/case study janaki .png";
import janakiCaseStudyImage2 from "../assets/janaki case study 3.png";
import bimalaCaseStudyImage1 from "../assets/case study bimala .png";
import bimalaCaseStudyImage2 from "../assets/bimala case study 3.png";
import broucherImage1 from "../assets/broucher 2.jpg";
import broucherImage2 from "../assets/broucher 1.jpg";
import broucherImage3 from "../assets/broucher 3.jpg";

const Article = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/getarticle", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setarticles(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div class="articleContainer" id="articleSection">
      <div class="articleContent">
        <h2 class="articleTitle">News Article/Case Study</h2>
        <div class="articleLogo">
          <img src={articleLogo} alt="DWEC" />
        </div>

        <div class="articleHolder">
          {articles.map((article) => (
            <div class="articleItem">
              <h2>{article.title}</h2>
              {article.photos.map((photo)=>(
                <img src={photo} alt="news article" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
