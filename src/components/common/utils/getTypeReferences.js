const getTypeReference = (params) => {
  const { type, hasWhichNumber, hasWhichCase } = params
  const configFor = {
    people: {
      singular: {
        uppercase: 'Person',
        lowercase: 'person',
      },
      plural: {
        uppercase: 'People',
        lowercase: 'people',
      },
    },
    clients: {
      singular: {
        uppercase: 'Client',
        lowercase: 'client',
      },
      plural: {
        uppercase: 'Clients',
        lowercase: 'clients',
      },
    },
    leads: {
      singular: {
        uppercase: 'Lead',
        lowercase: 'lead',
      },
      plural: {
        uppercase: 'Leads',
        lowercase: 'leads',
      },
    },
    articles: {
      singular: {
        uppercase: 'Article',
        lowercase: 'article',
      },
      plural: {
        uppercase: 'Articles',
        lowercase: 'articles',
      },
    },
  }
  return configFor[type][hasWhichNumber][hasWhichCase]
}

export default getTypeReference
