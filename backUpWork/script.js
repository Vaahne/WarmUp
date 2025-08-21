// SBA2 Java Script Fundamentals
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
     
      const learners = getAllLearners(submissions);   // getting all the learners 
      let results = [];
        
      for(let learner of learners){     // iterates through each learner
            let result = {};
            result.learner_id = learner;
            let learnerAssignmentScores = learnerScorePerAssignment(course,submissions,learner,ag); // getting all assignment scores of each learner
            const averagePerAssignment = getAveragePerAssignmentPerLearner(learnerAssignmentScores);  // getting average score of each assignment
            const averageOverallScore = calculateAverageScores(learnerAssignmentScores,learner);    // getting average score of all assignments    
           

            result.avg = averageOverallScore;
            result = appendResult(result,averagePerAssignment); // appending the average score per assignment to the result object
            results.push(result);       // storing the result of each learner in final result
      }
     return results;
 }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log("Result",result);

// appends the average of each assignment to the final result
function appendResult(result,avgScores){
    avgScores.forEach(sc => {
        result[Object.keys(sc)[0]] = Object.values(sc)[0];  //key,value with assignment_id and average 
    });
    return result;
}

//  returns the due_date by assignment_id
function getDueDateByAssignment(assignmentId,ag){
    const assignments = ag.assignments;   
    let due_date = new Date();
    try{
        for(let i of assignments){
            if(i.id === assignmentId){  
                due_date = i.due_at ;
                break;
            }
        }
    }catch(err){
        console.log(err.message);
    }
    return due_date;
}

// average per assignment per learner
// returns an array of objects with [{assignment_id : avg_score}]
function getAveragePerAssignmentPerLearner(learnerScorePerAssignment){
    let averageScorePerAssignment = [];
    for(let el of learnerScorePerAssignment){
        let sample = {};
        sample[el.assignmentId] = parseFloat((el.score / el.maxPoints).toFixed(2));
        averageScorePerAssignment.push(sample);
    }
    return averageScorePerAssignment;
}

//  Returns array of learner_ids
function getAllLearners(submissions){
    let learners = submissions.reduce((ar,sub)=>{
        if(ar.indexOf(sub.learner_id)==-1){
            ar.push(sub.learner_id);            
        }
        return ar;
    },[]);
    return learners;
}

// Returns array of assignment_ids
function getAssignmentIds(course,assignmentGroup){
    let assignmentIds = [];
    try{
        if(course.id === assignmentGroup.course_id){
            assignmentGroup.assignments.forEach(el=>{
                    assignmentIds.push(el.id);
            });
        }else{
            throw new Error(`This assignment group: ${assignmentGroup.id}, doesnot belong to this course `)
        }
    }catch(err){
        console.log(err.message);
    }
    return assignmentIds;
}
//Returns average of all assignment scores of learner
function calculateAverageScores(scorePerLearner,learner_id){
    let scoreEarned = 0, maxPoints = 0;
    for(let score of scorePerLearner){
        try{
            if(!isNaN(score.score) && !isNaN(score.maxPoints)){
                scoreEarned += parseInt(score.score);
                maxPoints += parseInt(score.maxPoints);
            }else 
                throw new Error(`For Learner: ${learner_id}, Score: ${score.score}  is not a number `);        
        }catch(err){
            console.log(err.message);
        }
    }
    if(scoreEarned == 0 || maxPoints == 0) return 0;
    return parseFloat((scoreEarned / maxPoints).toFixed(3));
}

// checking the due date with current date/2025 & returns boolean,if due_Date is > 2025 or current date
function checkDueDate(dueDate){
    let today = new Date();
    let date = JSON.stringify(today).split("T")[0];
    date = date.slice(1,date.length-1);
    let isTrue = (dueDate>date)?(true):(false);
    return isTrue;
}
// get the score of a Learner per assignment with max score
function learnerScorePerAssignment(course,submissions,learnerId,ag){
    let scores = [];
    try{
        for(let learner of submissions){

            if(learner.learner_id != learnerId) continue; 

            let scoreAndMaxScore = {};
            try{

                const assignmentId = learner.assignment_id; 
                let score = learner.submission.score;
                const submittedDate = learner.submission.submitted_at;

                if(!validateAssignment(course,assignmentId,ag)) 
                    throw new Error(`Assignment Id : ${assignmentId},  submitted by learner : ${learnerId} ,doesnot exist in the course`);

                // const maxPoints = getMaxPointsPerAssignment(course,assignmentId,ag);
                
                const assignment = ag.assignments.find(assignment => (assignment.id == assignmentId));
                const maxPoints = assignment.points_possible;
                
                if(assignment == null)
                    throw new Error (`Assignment: ${assignmentId} , doesnot belong to this course`);
            
                if(isNaN(maxPoints))
                    throw new Error(`Assignment: ${assignmentId}, Possible points:${maxPoints} is not a number`);
                if(maxPoints == 0)
                    throw new Error(`Assignment: ${assignmentId}, Possible points cannot be 0`);

                const dueDate = assignment.due_at;
                // let dueDate = getDueDateByAssignment(assignmentId,ag);
                
                if(checkDueDate(dueDate)) continue;  //checking due_date is pass current date or not 
                
                if(isNaN(score) || isNaN(maxPoints))    // checks if score or maxPoints not a number 
                    throw new Error(`For Learner: ${learner.learner_id}, Score: ${score}  is not a number`);
                     
                if(score > maxPoints && maxPoints!=0 && !isNaN(maxPoints))
                    throw new Error(`learner: ${learnerId}, score: ${score} cannot be more than maxPoints: ${maxPoints}`);
                                
                scoreAndMaxScore.assignmentId = assignmentId;
                scoreAndMaxScore.maxPoints = maxPoints; 
                
                // Calculation of score based on the date of submission
                if(submittedDate <= dueDate && score <= maxPoints){
                    scoreAndMaxScore.score = parseInt(score);
                }else if(submittedDate > dueDate && score <= maxPoints){
                    const tenPercent = maxPoints/10;
                    score -= tenPercent;
                    scoreAndMaxScore.score = parseInt(score);
                }
                if(scoreAndMaxScore.score)  // if score exists then only push the value
                    scores.push(scoreAndMaxScore);    
            }catch(err){
                console.log(err.message);
            }
        } 
    }catch(err){
         console.log(err.message);
    } 
    return scores;
}

// check if assignment belongs to assignment group or not
function validateAssignment(course,assignment_id,ag){
    if(getAssignmentIds(course,ag).indexOf(assignment_id) == -1)
        return false;
    return true;
}


// get the max points of an assignment with ID 
function getMaxPointsPerAssignment(course,assignmentId,ag){
    const assignments = ag.assignments;   
    let maxpoints = -1;
    try{
        if(!validateAssignment(course,assignmentId,ag))
            throw new Error(`Assignment: ${assignmentId}, is not part of this course ${course.id}`);
   
        for(let i of assignments){
            if(i.id === assignmentId){
                if(isNaN(i.points_possible))
                    throw new Error(`Assignment: ${assignmentId} has Possible_points :${i.points_possible} in not a number`);
                maxpoints = i.points_possible;    
                break;
            }
        }
        if(maxpoints <= 0)
            throw new Error(`Assignment: ${assignmentId}, Max Points can not be 0 `);
    }catch(err){
        console.log(err.message);
    }
    return maxpoints;
}