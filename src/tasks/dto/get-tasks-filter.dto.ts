import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { allowedStatuses, TaskStatus } from './../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(allowedStatuses)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
