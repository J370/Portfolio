---
layout: blog/post
title: "Lego Part Sorter Project Charter"
author: J370
tags: [Lego Part Sorter, Declassified]
categories: [ School ]
image: assets/images/posts/PartSorter/ganttchart.png
---
## Title
Part Sorter

## Scope
The scope of the project is to develop a part sorting system that can separate out Lego parts. Firstly, the user can enter the specifications for the desired outcome such as sorting through colours, shape, sizes or amount as well as categories of Lego parts like bricks and axels. A prerequisite is that structures must be dismantled into their individual parts. Once confirmed, the system must first do the separation of parts to provide convenience and accuracy during the scanning phase which follows once the separation phase is completed. Each individual part is then scanned and processed by the system through the aid of computer vision to check on the type of part. It is then fed into a sorter which disposes the part into the corresponding containers. Parts that are not sortable will be disposed into another container for further validation by a human. After everything is completed, the system provides a summary for the user to understand on what has been accomplished.

## Business Case
As an education centre, Nullspace Robotics has a lot of parts in their inventory. This ranges from Lego Mindstorm parts to Arduino sets. This project is mainly targeted at the Lego line-up within Nullspace. Before and after every lesson, there was always a need to sort out the sets again to provide ease during the next building session when trying to find the required parts. This is especially evident as there are multiple lessons within the week.

As such, a portion of time during lessons must be set aside for the students to sort the parts. Not only does it affect lessons, Nullspace also engages in team building projects such as creating of mosaic pieces. After team building activities, the staff at Nullspace would also have to take up part of their time to sort out all the parts. In the case of mosaic projects, each individual piece must be carefully accounted for. For example, there was a case where the colour of the parts was incorrect, and the pieces had to be re-counted.

Therefore, this entire process is usually repetitive and mundane. Additionally, it also takes up manpower that could have had been allocated to complete other tasks. However, it is a necessary part of the business to provide the convenience for clients. One solution is to utilise a part sorter to help automate the process. In addition to helping sort parts within the company, it can also be a solution to be provided to the public to help them with sorting their Lego parts.

## Background
Nullspace was established in 2008 as an education business focusing on technology. Nullspace has multiple subsidiaries namely Nullspace Robotics, Nullspace Centre For Robotics (C4RL) as well as Nullspace Education.

Nullspace Robotics focuses on robotics CCA in schools which are usually for competitive training. Schools and businesses might also engage Nullspace for enrichment programmes. For example, the company is appointed by IMDA with relation to their Code for Fun programmes. Nullspace provides guidance for schools to participate in competitions like the National Robotics Competition (NRC) with the company being Singapore’s National Partner in the International Robotics Olympiad Committee (IROC). This is a matured sector of the business with Nullspace being one of the largest providers for technology education.

Due to the popularity, the company started on a journey for enrichment classes under C4RL. These are private lessons with robotics being the focus. Other than Lego robotics, other platforms such as Arduino help provide coding knowledge. The company is also looking into python for an older age group. Like Nullspace Robotics, students are also able to participate in local and global competitions having gone through the necessary C4RL lessons.

Lastly, there are also curriculum lessons to provide teachers and instructors with the necessary knowledge and lesson materials to guide their own students with Lego Mindstorms EV3. These curriculums are licensed and there are also platforms to provide online lessons. The curriculums include software files that provide visualisation of topics that are being taught as well as a copy of the files went through within the curriculum.
In addition to such curriculums, Nullspace also organises the Innovate, Design and Engineering (IDE) competition. This has attracted more than 187 teams and 561 students in 2019. There is also ThinkCrate, a mini project kit that is based on Arduino. These projects allow students to build a project with given parts by following the lessons followed by programming the necessary instructions. The required knowledge are also taught beforehand to students such that they are able to catch up and have the proper understanding of a certain concept.

## Requirements
### Administrative

Stability — If an object were to get stuck in the system, the system needs to do an appropriate response.

Recoverability — After removing the stuck object, the system should be able to function as per normal.

Redundancy — Should an object get stuck; the rest of the system should not be affected and work as per usual.

Reliability — The system needs to provide high accuracy in its object recognition.

Security — The system must be only accessible to those with administrator rights.

Price — Cost of maintaining the system should be low.

Modifiability — Should a part of the system be upgraded; it can be easily done.
User

Perform — The system can perform the basic function of sorting parts.

Safety — The system needs to provide safety mechanisms when users are interacting with it.

Usability — The system should be easily understandable, and anyone should be able to use it.

Price — Cost of service provided should be reasonable.

Speed — The system must perform its given task as fast as possible.

## Team Composition
    
    Name        Role
    Alan Yong	1.	Represents customer/user
                2.	Owns product backlog
                3.	Owns vision and goals of product
                4.	Writes product backlog items in the form of user stories
                5.	Makes decisions about trade-offs

    Edmund Koh	1.	Leads change
                2.	Teaches and coaches scrum practices
                3.	Referees the scrum rules
                4.	Guides the inspect-and-adapt cycle
                5.	Fosters transparency
                6.	Removes impediments
                7.	Protects team from disruptions

    Jet Ong     1.	Builds product
    Ming Zhang  2.	Doing Quality Assurance (QA) testing
    Dawn

As this is the first time that Nullspace is using the Agile methodology, I will be providing guidance along the course of the project based on the best of my knowledge.

##	Resources Required
### Software
Python — Programming language with supported libraries for implementation of Computer Vision (CV)

OpenCV — Open sourced (CV) package to allow for image processing

Anaconda Package — Provides libraries to aid in implementation of CNN

Visual Paradigm — Helps visualises individual processes to be implemented

### Hardware

Camera/Huskylens/PiCam — Provide visual input for analysis

Beams — Create the structure of machine

Conveyor belts — Transport items

Dropper — Separate items

Lego EV3 — Creation of prototype

Raspberry Pi — Receives visual input for further processing

Arduino — Mechanical system controls