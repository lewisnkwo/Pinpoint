export class DummyService {
  
  sampleProfiles: any;
  sampleCircles: any;
  samplePins: any;
  sampleProjects: any;
  newSkillData: any;
  newInterestData: any;
  newBuddyMessageData: any;
  newCircleMessageData: any;

  constructor() {
    
  }
    // Static data
    getSampleProfiles() : any {
        
        this.sampleProfiles = [
        { name: 'Fred Lucas', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Biomedical Sciences',
          year: '1st Year',
          skills: [
            {
              name: 'Diagnosis',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Laboratory',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Health & Safety',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'STEM',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Technology',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Cancer Research',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Charities',
              iconName: 'checkbox-outline'              
            }
          ]    
         },
        { name: 'Alexander Poulsen', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Marketing',
          year: '2nd Year',
          skills: [
            {
              name: 'Social Media',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'PR',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Outdoor Advertising',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Print Media',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Marketing Week',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Print Media',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Autonomous Technology',
              iconName: 'checkbox-outline'              
            }
          ] 
         },
        { name: 'Marylin Hawkins', 
          image: 'https://randomuser.me/api/portraits/women/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Social Studies',
          skills: [
            {
              name: 'Sociology',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Child Minding',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Psychology',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Start-ups',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Fashion',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Medicine',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Charities',
              iconName: 'checkbox-outline'              
            }
          ] 
         },
        { name: 'Howard Jennings', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Aeronautical Engineering',
          year: '2nd Year',
          skills: [
            {
              name: 'MatLab',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'C++',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Engineering',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Rocket Science',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Technology',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Coding',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'SpaceX',
              iconName: 'checkbox-outline'              
            }
          ] 
         },
        { name: 'Emma Keran', 
          image: 'https://randomuser.me/api/portraits/women/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Software Engineering',
          year: 'Final Year',
          skills: [
            {
              name: 'C++',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Javascript',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Swift',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Mobile Phones',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Technology',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'FinTech',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Apple',
              iconName: 'checkbox-outline'              
            }
          ] 
         },
        { name: 'Gwendolyn Crawford', 
          image: 'https://randomuser.me/api/portraits/women/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'International Relations',
          year: '3rd Year',
          skills: [
            {
              name: 'PR',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Public Speaking',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Government Law',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'EU',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Importing & Exporting',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Business',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Travel',
              iconName: 'checkbox-outline'              
            }
          ]
         },
        { name: 'Aaron Stanley', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Sports Sciences',
          year: '1st Year',
          skills: [
            {
              name: 'Physical Education',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Sports Therapy',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Yoga',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Fitness',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Gym',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Healthy Eating',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Wearable Tech',
              iconName: 'checkbox-outline'              
            }
          ]
         },
        { name: 'Richard Baum', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'English Literature',
          year: 'Final Year',
          skills: [
            {
              name: 'English Language',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Creative Writing',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Poetry',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Art',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Technology',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Shakespeare',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Latin',
              iconName: 'checkbox-outline'              
            }
          ]
         },
        { name: 'Malou Mortensen', 
          image: 'https://randomuser.me/api/portraits/women/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1),
          university: 'Imperial College London',
          department: 'Fashion Design',
          year: '2nd Year',
          skills: [
            {
              name: 'Embroidery',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Photography',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Makeup',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'London Fashion Week',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Vogue',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Kim Kardashian',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Fashion',
              iconName: 'checkbox-outline'              
            }
          ]
         },
        { name: 'Mark Hamill', 
          image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
          buddies: (Math.floor(Math.random() * 98) + 1),
          circles: (Math.floor(Math.random() * 98) + 1),
          pins: (Math.floor(Math.random() * 98) + 1) ,
          university: 'Imperial College London',
          department: 'Film Studies',
          year: '3rd Year',
          skills: [
            {
              name: 'Videography',
              desc: '',
              iconName: 'checkbox'
            },
            {
              name: 'Motion Graphics',
              desc: '',
              iconName: 'checkbox'            
            },
            {
              name: 'Principal Photography',
              desc: '',
              iconName: 'checkbox'              
            }
          ],
          interests: [
            {
              name: 'Marvel',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Travel',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Post-modern Film',
              iconName: 'checkbox-outline'              
            },
            {
              name: 'Storytelling',
              iconName: 'checkbox-outline'              
            }
          ]
         },
    ];
    
    return this.sampleProfiles;
    
    }
    
    getSampleCircles() {
      
      this.sampleCircles = [
        {
          buddies: this.sampleProfiles,
          info: [
            {
              name: 'Yoga Amateurs',
              meeting: '5pm - 6pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/gym.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10)
            },{
              name: 'Rowing Society',
              meeting: '8pm - Late',
              location: 'Sports Department, Imperial',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/rowing.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10)           
            }
          ]
        }
      ]

    return this.sampleCircles;

    }
    
    getSamplePins() : any {
        
          this.samplePins = [
          { name: 'Fred Lucas', 
            image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
            buddies: (Math.floor(Math.random() * 98) + 1),
            circles: (Math.floor(Math.random() * 98) + 1),
            pins: (Math.floor(Math.random() * 98) + 1),
            university: 'Imperial College London',
            department: 'Biomedical Sciences',
            year: '1st Year',
            type: 'profile',
            meeting: null,
            location: null,
            address: null,
            skills: [
              {
                name: 'Basketball',
                desc: 'I can play ball very well.',
                iconName: 'checkbox'
              },
              {
                name: 'Football',
                desc: 'I also love a game of footy.',
                iconName: 'checkbox'
              },
              {
                name: 'Swimming',
                desc: 'Do fancy a nice swim from time to time',
                iconName: 'checkbox'            
              },
              {
                name: 'Tea Taster',
                desc: 'Not all brews are equal!',
                iconName: 'checkbox'              
              }
            ],
            interests: [
              {
                name: 'Tesla Motors',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Gym',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Travel',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Charities',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Yoga',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Film',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Social Media',
                iconName: 'checkbox-outline'              
              }
            ]    
          },
          { name: 'Chris Carter', 
            image: 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
            buddies: (Math.floor(Math.random() * 98) + 1),
            circles: (Math.floor(Math.random() * 98) + 1),
            pins: (Math.floor(Math.random() * 98) + 1),
            university: 'Imperial College London',
            department: 'Economics',
            year: '3rd Year',
            type: 'profile',
            meeting: null,
            location: null,
            address: null,
            skills: [
              {
                name: 'Basketball',
                desc: 'I can play ball very well.',
                iconName: 'checkbox'
              },
              {
                name: 'Football',
                desc: 'I also love a game of footy.',
                iconName: 'checkbox'
              },
              {
                name: 'Swimming',
                desc: 'Do fancy a nice swim from time to time',
                iconName: 'checkbox'            
              },
              {
                name: 'Tea Taster',
                desc: 'Not all brews are equal!',
                iconName: 'checkbox'              
              }
            ],
            interests: [
              {
                name: 'Tesla Motors',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Gym',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Travel',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Charities',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Yoga',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Film',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Social Media',
                iconName: 'checkbox-outline'              
              }
            ]    
          },
/*          { name: 'Rowing Society', 
            image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/rowing.jpg',
            buddies: (Math.floor(Math.random() * 98) + 1),
            circles: null,
            pins: (Math.floor(Math.random() * 98) + 1),
            university: 'Imperial College London',
            department: 'Sports Department',
            year: null,
            type: 'circle',
            meeting: '10:30am - 12pm',
            location: 'Imperial College London',
            address: 'South Kensington Campus, London, SW7 2AZ',
            skills: null
          },*/
          { name: 'Wanda Maximoff', 
            image: 'https://randomuser.me/api/portraits/women/' + (Math.floor(Math.random() * 99) + 1) + '.jpg',
            buddies: (Math.floor(Math.random() * 98) + 1),
            circles: (Math.floor(Math.random() * 98) + 1),
            pins: (Math.floor(Math.random() * 98) + 1),
            university: 'Imperial College London',
            department: 'Geography',
            year: '2nd Year',
            type: 'profile',
            meeting: null,
            location: null,
            address: null,
            skills: [
              {
                name: 'Basketball',
                desc: 'I can play ball very well.',
                iconName: 'checkbox'
              },
              {
                name: 'Football',
                desc: 'I also love a game of footy.',
                iconName: 'checkbox'
              },
              {
                name: 'Swimming',
                desc: 'Do fancy a nice swim from time to time',
                iconName: 'checkbox'            
              },
              {
                name: 'Tea Taster',
                desc: 'Not all brews are equal!',
                iconName: 'checkbox'              
              }
            ],
            interests: [
              {
                name: 'Tesla Motors',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Gym',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Travel',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Charities',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Yoga',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Film',
                iconName: 'checkbox-outline'              
              },
              {
                name: 'Social Media',
                iconName: 'checkbox-outline'              
              }
            ]    
          },
      ];
    
    return this.samplePins;
    
    }

    getSampleProjects() {
      
      this.sampleProjects = [
        {
          buddies: this.sampleProfiles,
          info: [
            {
              name: '3D Printing Transport',
              meeting: '5pm - 6pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/3d-printing.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''
            },{
              name: 'Breaking Barriers',
              meeting: '5:30pm - 7pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/body-art.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''              
            },{
              name: 'Build Your Own Business',
              meeting: '6pm - 8pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/building-business.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''                      
            },{
              name: 'Creative Coding',
              meeting: 'Tues 8pm - Late',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/code.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''                      
            },{
              name: 'Coffee Art Competitions',
              meeting: '10am - 11am',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/coffee.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''         
            },{
              name: 'Speaking Cantonese',
              meeting: 'Wed 7pm - 9pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/english-speaking.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''          
            },{
              name: '1 Second A Day',
              meeting: '8pm - Late',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/film-making.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''          
            },{
              name: 'Fit For Fun',
              meeting: 'Mon 9am - 10am',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/gyming.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''         
            },{
              name: 'Helping the Homeless',
              meeting: 'Varies',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/food.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''         
            },{
              name: 'Fixing Energy',
              meeting: 'Fri 8pm - 9pm',
              location: 'Imperial College London',
              address: 'South Kensington Campus, London, SW7 2AZ',
              image: 'https://pinp-draft.s3-eu-west-1.amazonaws.com/renewable-sources.jpg',
              buddies: (Math.floor(Math.random() * 98) + 10),
              pins: (Math.floor(Math.random() * 98) + 10),
              admin: this.sampleProfiles[~~(Math.random() * 10)],
              desc: ''         
            }
          ]
        }
      ]

    return this.sampleProjects;

    }
    
    getSkillModel () : any {
      
      this.newSkillData = {
        name: '',
        iconName: 'checkbox',
        description: ''
      }
      
      return this.newSkillData;
      
    }
    
    getInterestModel () : any {
      
      this.newInterestData = {
        name: '',
        iconName: 'checkbox-outline',
        description: ''
      }
      
      return this.newInterestData;
      
    }
    
    getBuddyMessageModel () : any {
      
      this.newBuddyMessageData = {
        title: '',
        message: ''
      }
      
      return this.newBuddyMessageData;
      
    }
    
    getCircleMessageModel () : any {
      
      this.newCircleMessageData = {
        title: '',
        message: ''
      }
      
      return this.newCircleMessageData;
      
    }
 
}