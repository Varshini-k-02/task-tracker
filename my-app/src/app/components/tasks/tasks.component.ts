import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  //Define this first for using taskService in the below observable

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    //Like a promise, subscribe() is used to get the data from the service
  }

  //Single task is deleted hence no array parameter
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}

//getTasks() is an observable
//getTasks() and deleteTask() are methods of taskService
