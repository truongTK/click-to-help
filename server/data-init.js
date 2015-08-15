Service.upsert({
  id: "001",
  icon: "icons/img/house-cleanning.png",
  text: "House Cleaning"
}, {
  $set: {
    icon: "icons/img/house-cleanning.png",
    text: "House Cleaning"
  }
});
Service.upsert({
  id: "002",
  icon: "icons/img/home-massage.png",
  text: "Home Massage"
}, {
  $set: {
    icon: "icons/img/home-massage.png",
    text: "Home Massage"
  }
});
Service.upsert({
  id: "003",
  icon: "icons/img/shopping-help.png",
  text: "Help Shopping"
}, {
  $set: {
    icon: "icons/img/shopping-help.png",
    text: "Help Shopping"
  }
});
Service.upsert({
  id: "004",
  icon: "icons/img/baby-care.png",
  text: "Child care"
},
  {
    $set: {
      icon: "icons/img/baby-care.png",
      text: "Child care"
    }
  });
Service.upsert({
  id: "005",
  icon: "icons/img/text-translate.png",
  text: "Text Translate"
}, {
  $set: {
    icon: "icons/img/text-translate.png",
    text: "Text Translate"
  }
});

tasker1 = Tasker.upsert({
  username: "toanpp",
  email: "toanpp@twin.vn",
  avatar: "avatars/toanpp.jpg"
}, {
  $set: {
    username: "toanpp",
    email: "toanpp@twin.vn",
    avatar: "avatars/toanpp.jpg"
  }
});

tasker2 = Tasker.upsert({
  username: "linhnh",
  email: "linhnh@twin.vn",
  avatar: "avatars/linhnh.jpg"
}, {
  $set: {
    username: "linhnh",
    email: "linhnh@twin.vn",
    avatar: "avatars/linhnh.jpg"
  }
});

tasker3 = Tasker.upsert({
  username: "truongtt",
  email: "truongtt@twin.vn",
  avatar: "avatars/truongtk.jpg"
}, {
  $set: {
    username: "truongtt",
    email: "truongtt@twin.vn",
    avatar: "avatars/truongtk.jpg"
  }
});

task1 = Task.upsert({
  serviceId: "001",
  description: "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
  date: new Date(),
  time: new Date(),
  duration: 4.0,
  address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone: "01228833055",
  email: "toanpp@twin.vn",
  cost: 200000,
  createdAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      serviceId: "001",
      description: "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
      date: new Date(),
      time: new Date(),
      duration: 4.0,
      address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
      phone: "01228833055",
      email: "toanpp@twin.vn",
      cost: 200000,
      createdAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task1.insertedId,
  taskerId: tasker1.insertedId,
  status: "accepted",
  createdAt: "2015-08-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task1.insertedId,
      taskerId: tasker1.insertedId,
      status: "accepted",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

task2 = Task.upsert({
  serviceId: "002",
  description: "Massage tai nha",
  date: new Date(),
  time: new Date(),
  duration: 1,
  address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone: "01228833055",
  email: "linhnh@twin.vn",
  cost: 300000,
  createdAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      serviceId: "002",
      description: "Massage tai nha",
      date: new Date(),
      time: new Date(),
      duration: 1,
      address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
      phone: "01228833055",
      email: "linhnh@twin.vn",
      cost: 300000,
      createdAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "accepted",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "accepted",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

TaskStatus.upsert({
  taskId: task1.insertedId,
  taskerId: tasker1.insertedId,
  status: "unread",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task1.insertedId,
      taskerId: tasker1.insertedId,
      status: "unread",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
TaskStatus.upsert({
  taskId: task1.insertedId,
  taskerId: tasker2.insertedId,
  status: "unread",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task1.insertedId,
      taskerId: tasker2.insertedId,
      status: "unread",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });


TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
