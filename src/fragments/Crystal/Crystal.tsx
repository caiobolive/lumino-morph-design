import React from "react";
import { motion, useAnimation } from "framer-motion";

const Crystal = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start("spread");
  };

  const handleMouseLeave = () => {
    controls.start("initial");
  };

  const spreadDistance = (x: number, y: number, scale: number = 0.4) => {
    return { x: (x - 300) * scale, y: (y - 300) * scale };
  };

  const variants = {
    initial: { opacity: 1 },
    spread: {
      opacity: 0.8
    },
  };

  const pieceVariants = (x: number, y: number, offsetX = 0, offsetY = 0) => ({
    initial: { x: offsetX, y: offsetY, scale: 1 },
    spread: {
      x: spreadDistance(x, y).x + offsetX,
      y: spreadDistance(x, y).y + offsetY,
      scale: 1.05,
    },
  });

  return (
    <motion.div
      initial="initial"
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={variants}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <svg
        width="300"
        height="300"
        viewBox="-100 -100 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          width="300"
          height="300"
          data-name="Premium motion"
        >
          <g
            transform="translate(79 57.94)"
            className="Premium_616"
            width="300"
            height="300"
            data-name="Premium"
          >
            <motion.path
              d="M24 270L151 316.5L181 552.5L0 384.5L24 270Z"
              fill="url(#paint_linear_535)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(24, 270)}
            />
            <motion.path
              d="M75.5 193.5L151.5 80L151 316L24 270L75.5 193.5Z"
              fill="url(#paint_linear_414)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(75.5, 193.5)}
            />
            <motion.path
              d="M151.5 79.5L297.5 1L260.378 83L244.5 118.5L222.175 165.5L151 316L151.5 79.5Z"
              fill="url(#paint_linear_539)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(151.5, 79.5)}
            />
            <motion.path
              d="M151 316L206 198L338 377L181 552.5L151 316Z"
              fill="url(#paint_linear_883)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(151, 316)}
            />
            <motion.path
              d="M244.5 118.5L297.5 0L368 111L338 377L206 198L244.5 118.5Z"
              fill="url(#paint_linear_333)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(244.5, 118.5)}
            />
            <motion.path
              d="M338 377L397 440L372 505.5L181 552.5L338 377Z"
              fill="url(#paint_linear_634)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(338, 377)}
            />
            <motion.path
              d="M368 111L442.5 333L397 440L338 377L368 111Z"
              fill="url(#paint_linear_920)"
              data-name="backcrystal"
              className="backcrystal_448"
              variants={pieceVariants(368, 111)}
            />
            <motion.path
              d="M24 0L151 46.5L181 282.5L0 114.5L24 0Z"
              fill="url(#paint_linear_16)"
              data-name="Rectangle 15"
              transform="translate(0 270)"
              variants={pieceVariants(24, 270, 0, 270)}
            />
            <motion.path
              d="M51.5 113.5L127.5 0V236.5L0 190L51.5 113.5Z"
              fill="url(#paint_linear_847)"
              data-name="Rectangle 16"
              transform="translate(24 80)"
              variants={pieceVariants(51.5, 113.5, 24, 80)}
            />
            <motion.path
              d="M0.5 79.5L146.5 0L70.5 165L0.5 316.5V79.5Z"
              fill="url(#paint_linear_578)"
              data-name="Rectangle 17"
              transform="translate(151.5 0)"
              variants={pieceVariants(0.5, 79.5, 151.5, 0)}
            />
            <motion.path
              d="M0.5 118.5L56 0.5L187.5 179.5L30 354.5L0.5 118.5Z"
              fill="url(#paint_linear_91)"
              data-name="Rectangle 18"
              transform="translate(151.5 198.5)"
              variants={pieceVariants(0.5, 118.5, 151.5, 198.5)}
            />
            <motion.path
              d="M38.5 118.5L91.5 0L162 111L131.5 377.5L0.5 198.5L38.5 118.5Z"
              fill="url(#paint_linear_313)"
              data-name="Rectangle 19"
              transform="translate(206.5 0)"
              variants={pieceVariants(38.5, 118.5, 206.5, 0)}
            />
            <motion.path
              d="M157.5 0.5L216 63L191 128.5L0 175.5L157.5 0.5Z"
              fill="url(#paint_linear_218)"
              data-name="Rectangle 20"
              transform="translate(181 377.5)"
              variants={pieceVariants(157.5, 0.5, 181, 377.5)}
            />
            <motion.path
              d="M30 0L104.5 222L58 331L0.5 266.5L30 0Z"
              fill="url(#paint_linear_918)"
              data-name="Rectangle 21"
              transform="translate(338.5 111)"
              variants={pieceVariants(30, 0, 338.5, 111)}
            />
          </g>
          <motion.path
            d="M28.5445 303.637L2.25 431.711L204.773 620.187M28.5445 303.637L171.206 355.649M28.5445 303.637L171.206 91.1117M204.773 620.187L171.206 355.649M204.773 620.187L379.324 423.881M204.773 620.187L415.688 566.496L445.339 493.79M171.206 355.649V91.1117M171.206 355.649L232.676 223.101M171.206 91.1117L335.127 2.18684M335.127 2.18684L412.891 125.787M335.127 2.18684L232.676 223.101M412.891 125.787L379.324 423.881M412.891 125.787L496.25 372.987L445.339 493.79M379.324 423.881L232.676 223.101M379.324 423.881L445.339 493.79"
            stroke="white"
            strokeWidth="1.5"
            data-name="Vector 2"
            className="Vector_2_415"
            variants={pieceVariants(28.5445, 303.637)}
          />
        </g>
        <defs>
          <clipPath id="clip_0_855">
            <rect width="800" height="800" />
          </clipPath>
          <linearGradient
            id="paint_linear_535"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_414"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_539"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_883"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_333"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_634"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_920"
            x1="101.5"
            y1="33.5"
            x2="337.5"
            y2="605.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B88FF" />
            <stop offset="0.421875" stopColor="#DBDEFF" />
            <stop offset="0.692708" stopColor="#D1C3FF" />
            <stop offset="1" stopColor="#BA84FF" />
          </linearGradient>
          <linearGradient
            id="paint_linear_16"
            x1="91"
            y1="0"
            x2="91"
            y2="283.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AA9CFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_847"
            x1="63.75"
            y1="0"
            x2="63.75"
            y2="236.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#916AFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_578"
            x1="73"
            y1="296.5"
            x2="-104.5"
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B66FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_91"
            x1="94"
            y1="0.5"
            x2="94"
            y2="355"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F3D0FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_313"
            x1="81.25"
            y1="5.94499e-09"
            x2="81.25"
            y2="377.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A68FFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_218"
            x1="209.5"
            y1="218"
            x2="90"
            y2="-75.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A192FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint_linear_918"
            x1="52.25"
            y1="2.5"
            x2="52.25"
            y2="331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BEB9FF" />
            <stop offset="0.0001" stopColor="#7A28FF" />
            <stop offset="0.765625" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Crystal;