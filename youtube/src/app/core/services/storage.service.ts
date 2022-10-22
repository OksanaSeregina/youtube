import { Injectable } from '@angular/core';

const STORAGE_KEY = 'store';

@Injectable()
export class StorageService {
  public set(key: keyof any, value: any): void {
    const storage: any = this.getStorage();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(storage ? { ...storage, [key]: value } : { [key]: value })
    );
  }

  public get(key: keyof any): any {
    const storage: any = this.getStorage();
    if (storage) {
      return storage[key];
    }
  }

  public clear(): void {
    localStorage.setItem(STORAGE_KEY, '');
  }

  private getStorage(): any {
    const storage: string | null = localStorage.getItem(STORAGE_KEY);
    return storage ? <any>JSON.parse(storage) : <any>{};
  }
}
