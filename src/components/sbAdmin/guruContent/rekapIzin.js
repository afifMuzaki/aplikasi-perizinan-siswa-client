const RekapIzin = () => {
    return (
        <div class="container-fluid">
            <h3 class="text-dark mb-4">Rekap</h3>
            <div class="card shadow">
                <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">Data Perizinan Siswa</p>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 text-nowrap">
                            <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                <option value="10" selected="">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>&nbsp;</label></div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                        </div>
                    </div>
                    <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table class="table table-striped table-hover table-bordered my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th class="text-center">Nama</th>
                                    <th class="text-center">Kelas</th>
                                    <th class="text-center">Tanggal</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Mengetahui Guru</th>
                                    <th class="text-center">Mengetahui Petugas</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">Siswa1</td>
                                    <td class="text-center">XII RPL B</td>
                                    <td class="text-center">03/04/2023</td>
                                    <td class="text-center">Disetujui</td>
                                    <td class="text-center">Guru1</td>
                                    <td class="text-center">Petugas1</td>
                                    <td class="text-center"><button class="btn btn-warning mx-2 text-white" type="button" data-bs-toggle="modal" data-bs-target="#modal-1">Detail</button></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Siswa1</td>
                                    <td class="text-center">XII RPL B</td>
                                    <td class="text-center">03/04/2023</td>
                                    <td class="text-center">Disetujui</td>
                                    <td class="text-center">Guru1</td>
                                    <td class="text-center">Petugas1</td>
                                    <td class="text-center"><button class="btn btn-warning mx-2 text-white" type="button">Detail</button></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Siswa1</td>
                                    <td class="text-center">XII RPL B</td>
                                    <td class="text-center">03/04/2023</td>
                                    <td class="text-center">Disetujui</td>
                                    <td class="text-center">Guru1</td>
                                    <td class="text-center">Petugas1</td>
                                    <td class="text-center"><button class="btn btn-warning mx-2 text-white" type="button">Detail</button></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Siswa1</td>
                                    <td class="text-center">XII RPL B</td>
                                    <td class="text-center">03/04/2023</td>
                                    <td class="text-center">Disetujui</td>
                                    <td class="text-center">Guru1</td>
                                    <td class="text-center">Petugas1</td>
                                    <td class="text-center"><button class="btn btn-warning mx-2 text-white" type="button">Detail</button></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td class="text-center"><strong>Nama</strong></td>
                                    <td class="text-center"><strong>Kelas</strong></td>
                                    <td class="text-center"><strong>Tanggal</strong></td>
                                    <td class="text-center"><strong>Status</strong></td>
                                    <td class="text-center"><strong>Mengetahui Guru</strong></td>
                                    <td class="text-center"><strong>Mengetahui Petugas</strong></td>
                                    <td class="text-center"><strong>Aksi</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-dark">
                            <h4 class="modal-title">Siswa1</h4><span class="d-inline mx-2">|</span>
                            <p class="d-inline m-0">XII RPL B</p><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>The content of your modal.</p>
                        </div>
                        <div class="modal-footer"><button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RekapIzin;