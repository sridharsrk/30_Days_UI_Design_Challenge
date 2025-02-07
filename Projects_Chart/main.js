const completedProjectsCount = 50;
const overdueProjectsCount = 20;
const inProgressProjectsCount = 30;
const totalProjectsCount = completedProjectsCount + overdueProjectsCount + inProgressProjectsCount;

const completedProjectsPercentage = Math.round((completedProjectsCount / totalProjectsCount) * 100);
const overdueProjectsPercentage = Math.round((overdueProjectsCount / totalProjectsCount) * 100);
const inProgressProjectsPercentage = Math.round((inProgressProjectsCount / totalProjectsCount) * 100);

const completed = document.querySelector('.completed .count');
const overdue = document.querySelector('.overdue .count');
const inProgress = document.querySelector('.inProgress .count');
const totalCount = document.querySelector('.totalCount');

completed.innerHTML = `<p>${completedProjectsCount}</p>`;
overdue.innerHTML = `<p>${overdueProjectsCount}</p>`;
inProgress.innerHTML = `<p>${inProgressProjectsCount}</p>`;
totalCount.innerHTML = `<p class="totalCount">${totalProjectsCount}</p>`;

const chart = document.querySelector('.chart');
chart.style.background = `conic-gradient(#0cdfba 0% ${completedProjectsPercentage}%, #f1ba00 ${completedProjectsPercentage}% ${completedProjectsPercentage + overdueProjectsPercentage}%}, #7661f1 ${completedProjectsPercentage + overdueProjectsPercentage}% 100%)`;