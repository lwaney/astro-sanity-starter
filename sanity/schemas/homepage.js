export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Titel',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Ondertitel',
      type: 'string',
    },
    {
      name: 'diensten',
      title: 'Diensten',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'usp',
      title: 'Waarom Waney',
      type: 'array',
      of: [{type: 'string'}],
    },
  ]
}