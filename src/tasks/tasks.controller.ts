import { Controller, Delete, Patch, Get, Post, Put, Body, Query, Param} from "@nestjs/common"; 
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController{
constructor(private tasksService: TasksService){}
    
    @Get()
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Success'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    getAllTasks(@Query()query : any){
        console.log(query)
        return this.tasksService.getTasks()         // Podemos ejecutar esta funcion en alguna base de datos
                                                        // Podemos hacer una peticion a otro backend o api, etc
    }

    @Get('/:id')
    getTask(@Param('id') id:string)  {
        console.log(id)
        return this.tasksService.getTask(parseInt(id))         // Podemos ejecutar esta funcion en alguna base de datos
                                                        // Podemos hacer una peticion a otro backend o api, etc
    }

    @Post()
    @ApiOperation({summary: 'Create a new task'})
    createTask(@Body() task: CreateTaskDto ){
        return this.tasksService.createTask(task)   
    }

    @Put()  //actualiza tareas
    updateTask(@Body() task: UpdateTaskDto){                                       
        return this.tasksService.updateTask(task)     
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask()
    }

    @Patch() //Actualiza una porcion
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()       
    }

    }