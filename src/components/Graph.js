import { ResponsiveLine } from "@nivo/line";

const Graph = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 0, right: 50, bottom: 50, left: 60 }}
    xScale={{ type: "point", min: "auto", max: "auto" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 10,
      tickPadding: 5,
      tickRotation: -30,
      legend: "Level",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "experience",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{ scheme: "purple_orange" }}
    pointSize={3}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
    enableArea={true}
  />
);

export default Graph;
