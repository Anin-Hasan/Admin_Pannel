import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Pie_Chart = () => {
  const data = [
    {
      id: "mobile",
      label: "Mobile",
      value: 83,
      color: "hsl(281, 70%, 50%)",
    },
    {
      id: "Desktop",
      label: "Desktop",
      value: 53,
      color: "hsl(286, 70%, 50%)",
    },
    {
      id: "Laptop",
      label: "Laptop",
      value: 321,
      color: "hsl(91, 70%, 50%)",
    },
    {
      id: "Tablet",
      label: "Tablet",
      value: 596,
      color: "hsl(202, 70%, 50%)",
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "Desktop",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },

        {
          match: {
            id: "mobile",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 75,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Pie_Chart;
