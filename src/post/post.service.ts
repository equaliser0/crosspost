import { Injectable } from '@nestjs/common';
import { SplitterService } from './splitter/splitter.service';

@Injectable()
export class PostService {
  constructor(
    private splitterService: SplitterService
  ) {}

  async post() {
    // TODO Split for API
    this.splitterService.split()
  }
}
