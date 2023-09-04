import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const ResBar = () => {
  const barData = [
    {
      country: "AD",
      "hot dog": 129,
      "hot dogColor": "hsl(188, 70%, 50%)",
      burger: 59,
      burgerColor: "hsl(253, 70%, 50%)",
      sandwich: 43,
      sandwichColor: "hsl(139, 70%, 50%)",
      kebab: 106,
      kebabColor: "hsl(213, 70%, 50%)",
      fries: 134,
      friesColor: "hsl(302, 70%, 50%)",
      donut: 113,
      donutColor: "hsl(22, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 129,
      "hot dogColor": "hsl(244, 70%, 50%)",
      burger: 194,
      burgerColor: "hsl(126, 70%, 50%)",
      sandwich: 24,
      sandwichColor: "hsl(227, 70%, 50%)",
      kebab: 158,
      kebabColor: "hsl(129, 70%, 50%)",
      fries: 24,
      friesColor: "hsl(261, 70%, 50%)",
      donut: 158,
      donutColor: "hsl(141, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 121,
      "hot dogColor": "hsl(7, 70%, 50%)",
      burger: 33,
      burgerColor: "hsl(304, 70%, 50%)",
      sandwich: 56,
      sandwichColor: "hsl(219, 70%, 50%)",
      kebab: 109,
      kebabColor: "hsl(145, 70%, 50%)",
      fries: 72,
      friesColor: "hsl(184, 70%, 50%)",
      donut: 19,
      donutColor: "hsl(65, 70%, 50%)",
    },

    {
      country: "AL",
      "hot dog": 114,
      "hot dogColor": "hsl(116, 70%, 50%)",
      burger: 23,
      burgerColor: "hsl(266, 70%, 50%)",
      sandwich: 200,
      sandwichColor: "hsl(359, 70%, 50%)",
      kebab: 171,
      kebabColor: "hsl(48, 70%, 50%)",
      fries: 180,
      friesColor: "hsl(81, 70%, 50%)",
      donut: 73,
      donutColor: "hsl(322, 70%, 50%)",
    },
  ];
  return (
    <ResponsiveBar
      data={barData}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "bottom-right",
      //     direction: "column",
      //     justify: false,
      //     translateX: 120,
      //     translateY: 0,
      //     itemsSpacing: 2,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.85,
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default ResBar;
