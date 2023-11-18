
const evaluate = (req, res) => {
    const {questionSet, paperName, level} = req.body

    const report = {
        paperName,
        level,
        marks: 0,
        correct: 0,
        wrong: 0,
        attempt: 0,
        unattempt: 0,
        numerical: 0,
        varbal: 0,
        reasoning: 0,
        genaral: 0,
        grade: null
    }
     

    questionSet.map(({selected, answere, marks, belongsTo}) => {
        if (selected === answere) {
            report.marks += marks
            report.correct += 1
            report.attempt += 1

            switch (belongsTo) {
                case 'NA':
                    report.numerical += marks
                    break;
                case 'GR':
                    report.varbal += marks
                    break;
                case 'LR':
                    report.reasoning += marks
                    break;
                case 'GK':
                    report.genaral += marks
                    break;
                default:
                    break;
            }
        } else if(selected !== '') {
            report.attempt += 1
            report.wrong += 1
        } else {
            report.unattempt += 1
        }
    })

    if (report.marks > 70) 
        report.grade = 'A'
    else if (report.marks > 50)
        report.grade = 'B'
    else if (report.marks > 30)
        report.grade = 'C'
    else 
        report.grade = 'Bad'

    res.json({success: true, report})
}


module.exports = {evaluate}