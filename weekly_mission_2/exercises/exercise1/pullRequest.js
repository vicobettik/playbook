const pullRequest = {
    title: 'pullRequest1',
    branchName: 'master',
    dateCreated: '20/04/2022',
    status: 'open',
    repositoryNameAssociated: 'Repo1',
    getStatus: function(){
        return this.status;
    },
    getTitleAndAutor: function(){
        return `This pull request  ${this.title} was created by ${this.repositoryNameAssociated}`
    }
}