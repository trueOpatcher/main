import { Injectable } from "@angular/core";
import { BehaviorSubject, delay } from "rxjs";


@Injectable({ providedIn: 'root'})

export class ScrollService {

    isTopScrolling = new BehaviorSubject<boolean | null>(null);


}