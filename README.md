# Lithium
Backend cohort Oct 2022 - Jan 2023

## To do
- Run the code
- Hit both the example apis and try to understand the code with the help of the comments
- Modify code and see how the result changes
- Stash the code and start attempting the assignment

## Assignment
https://docs.google.com/document/d/1F7b6nA1l8UcA8QgRktSGzk91k8JqJeNBtOCluTh_DCE/edit


else 
    for(let j=0; j<publisherdata.length; j++){
        ele = publisherdata[j]
        ind = ele._id
        if(saveData.publisher_id !== ind) 
        res.send({msg: "sorry, this publisher is not present"})
        }
