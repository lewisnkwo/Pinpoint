
export class History {

  constructor() {}
  
  imgPath: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/gym.jpg';
  imgPath2: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/founders.jpg';
  imgPath3: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/lab.jpg';
  imgPath4: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/rowing.jpg';
  
    getProfileSearchHistory() : [any] {

      return [
        { avatar: this.imgPath, name: 'Cyrus', desc: 'Pushing PinPoint forward!' },
        { avatar: this.imgPath2, name: 'Seb', desc: 'Pushing PinPoint forward!' },
        { avatar: this.imgPath3, name: 'Jordan', desc: 'Pushing PinPoint forward!' },
        { avatar: this.imgPath4, name: 'Lewis', desc: 'Pushing PinPoint forward!' }
      ];

    }
    
    getCircleSearchHistory() : [any] {

      return [
        { avatar: this.imgPath, name: 'Cyrus', desc: 'Business Circle' },
        { avatar: this.imgPath2, name: 'Seb', desc: 'Business Circle' },
        { avatar: this.imgPath3, name: 'Jordan', desc: 'IT Circle' },
        { avatar: this.imgPath4, name: 'Lewis', desc: 'Development Circle' }
      ];

    }

}

