import React from "react";
import { LineChart, Line } from "recharts";

const LChart = () => {
  const mathMarks = [
    {
      id: 1,
      name: "Student 1",
      marks: [85, 90, 88, 92, 87],
    },
    {
      id: 2,
      name: "Student 2",
      marks: [78, 82, 85, 88, 90],
    },
    {
      id: 3,
      name: "Student 3",
      marks: [92, 88, 94, 89, 91],
    },
    {
      id: 4,
      name: "Student 4",
      marks: [75, 80, 79, 83, 78],
    },
    {
      id: 5,
      name: "Student 5",
      marks: [91, 87, 93, 90, 88],
    },
    {
      id: 6,
      name: "Student 6",
      marks: [82, 85, 88, 84, 86],
    },
    {
      id: 7,
      name: "Student 7",
      marks: [88, 90, 92, 89, 91],
    },
    {
      id: 8,
      name: "Student 8",
      marks: [76, 78, 80, 79, 82],
    },
    {
      id: 9,
      name: "Student 9",
      marks: [90, 88, 92, 89, 91],
    },
    {
      id: 10,
      name: "Student 10",
      marks: [85, 87, 90, 88, 89],
    },
  ];

  return (
    <div>
      <LineChart width={500} height={400} data={mathMarks} />
      <Line dataKey={mathMarks.marks} />
    </div>
  );
};

export default LChart;
