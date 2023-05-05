export const questions = [
  {
    section: 1,
    items: [
      {
        index: 1,
        label: 'Data Source',
        type: 'select',
        value: 'datasource',
        options: [ 'Snowflake_demo', 'Snowflake_sdq']
      },
      {
        index: 2,
        label: 'Data Base',
        type: 'select',
        value: 'database',
        options: [ 'demo1', 'demo2']
      },
      {
        index: 3,
        label: 'Schema',
        type: 'select',
        value: 'database',
        options: [ 'schema1', 'schema2']
      },
      {
        index: 4,
        label: 'Table',
        type: 'select',
        value: 'database',
        options: [ 'table1', 'table2']
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Street Address',
        type: 'text',
        value: 'street'
      },
      {
        label: 'City',
        type: 'text',
        value: 'city'
      },
      {
        label: 'State',
        type: 'select',
        value: 'state',
        options: [ 'State 1', 'State 2']
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'If you are ready to submit please press `Submit`',
        type: 'information'
      }
    ]
  }
]
