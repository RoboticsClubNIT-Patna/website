const carouselCardData =[
    {
       id:1, 
       imageUrl:'/images/carousel/mark1.6.png',
       head1:'MARK 1.6',
       head2:'',
       para:'Mark 1.6 is basically a fully wireless Bluetooth controlled robotic arm which is mounted on a 4WD chassis in this the arm is made using 3D printer and used NRF modules',
       backgroundColor:'bg-customPink'
    },
    {
       id:2, 
       imageUrl:'/images/carousel/selfbalancing.png',
       head1:'SELF BALANCING BOT',
       head2:'',
       para:'The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge, this inverted pendulum cannot stay balanced on its own. It will simply fall over. Then how do we balance it? Consider balancing a broomstick on our index finger which is a classic example of balancing an inverted pendulum. We move our finger in the direction in which the stick is falling. Similar is the case with a self-balancing robot, only that the robot will fall either forward or backward. Just like how we balance a stick on our finger, we balance the robot by driving its wheels in the direction in which it is falling. What we are trying to do here is to keep the center of gravity of the robot exactly above the pivot point. To drive the motors we need some information on the state of the robot. We need to know the direction in which the robot is falling, how much the robot has tilted and the speed with which it is falling. All these information can be deduced from the readings obtained from MPU6050. We combine all these inputs and generate a signal which drives the motors and keeps the robot balanced.',
       backgroundColor:'bg-neonGreen'
    },
    {
      id:3, 
      imageUrl:'/images/carousel/3Dprinting.png',
      head1:'3D PRINTING',
      head2:'',
      para:'3D printing is a process of making three dimensional solid objects from a digital file. The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the object is created. Each of these layers can be seen as a thinly sliced cross-section of the object. 3D printing is the opposite of subtractive manufacturing which is cutting out / hollowing out a piece of metal or plastic with for instance a milling machine.',
      backgroundColor:'bg-neonBlue'
   }
];

export default carouselCardData;