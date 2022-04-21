const issue = {
    title: 'Issue1',
    repositoryNameAssociated: "Repo1",
    status: 'Open',
    numberOfComments: 1,
    labels: [],
    author: 'vicobettik',
    dateCreated: '20/04/2022',
    lastUpdated: '20/04/2022',
    getTitleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        return `This issu ${this.title} was associated to ${this.repositoryNameAssociated}`
    }
}