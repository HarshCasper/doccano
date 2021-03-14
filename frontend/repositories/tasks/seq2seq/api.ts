import { AnnotationRepository } from '../interface'
import { Seq2seqLabel } from '~/models/tasks/seq2seq'


export class FromApiSeq2seqRepository extends AnnotationRepository<Seq2seqLabel> {
  constructor() {
    super(Seq2seqLabel)
  }

  public async update(projectId: string, docId: number, annotationId: number, text: string) {
    const url = this.baseUrl(projectId, docId) + `/${annotationId}`
    const payload = { text }
    await this.request.patch(url, payload)
  }

  protected baseUrl(projectId: string, docId: number): string {
    return `/projects/${projectId}/docs/${docId}/annotations`
  }
}