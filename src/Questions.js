export const questions = [
  {
    section: 1,
    items: [
      {
        label: "Data Source Type",
        type: "select",
        value: "datasource",
        options: ["RDBMS", "FILE"],
      },
      {},
      {
        label: "Data Source Connection",
        type: "select",
        value: "database",
        options: ["demo1", "demo2"],
      },
      {
        label: "Create Data Source Connection",
        type: "add",
        value: "cdsc",
      },
      {
        label: "Data Target Connection ",
        type: "select",
        value: "dtc",
        options: ["target1", "target2"],
      },
      {
        label: "Create Data Target Connection",
        type: "add",
        value: "cdtc",
      },
      {
        label: "Application",
        type: "select",
        value: "app",
        options: ["app1", "app2"],
      },
      {
        label: "Create Application",
        type: "add",
        value: "ca",
      },
    ],
  },
  {
    section: 2,
    items: [
      {
        label: "Source Type",
        type: "select",
        value: "database",
        options: ["Query", "Table"],
      },
      {
        label: "Query",
        type: "text",
        value: "query",
      },
      {},
      {
        label: "Database Name",
        type: "text",
        value: "databasename",
      },
      {
        label: "Schema Name",
        type: "text",
        value: "schemaname",
      },
      {
        label: "Table Name",
        type: "text",
        value: "tablename",
      },
      {
        label: "Bucket Name",
        type: "text",
        value: "bucketname",
      },
      {
        label: "Full File Name",
        type: "text",
        value: "fullfilename",
      },
    ],
  },
  {
    section: 3,
    items: [
    ],
  },
];
